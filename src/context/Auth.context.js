import {
	useContext,
	createContext,
	useState,
	useLayoutEffect,
	useEffect,
} from "react";
import axios from "axios";
import Cookies from "js-cookie";


const AuthContext = createContext();

const useAuth = () => {
	return useContext(AuthContext);
}


export function AuthContextProvider({ children }) {
	const [token, setToken] = useState(null);
	const [user, setUser] = useState(null);
	const [rol, setRol] = useState(null)
	const [employee, setEmployee] = useState(null)

	const set = (token) => {
		setToken(token);
		axios.defaults.headers.common.Authorization =
			"Bearer " + token;

		axios.get("auth/whoami").then((res) => {
			setUser(res.data.data);
		});
	};



	// this is the function for sign-in .....................................
	const signIn = async (email, password) => {
		try {
			const { data } = await axios.post(
				"auth/sign_in",
				{
					email,
					password,
				},
			);

			set(data.token);
			// console.log(data, "data")
			// setUser(data)
			localStorage.setItem("token", data.token);
		} catch (e) {
			console.log(e);
		}
	};


		useLayoutEffect(() => {
		const token = localStorage.getItem("token");
try {
	if (token) {
		setToken(token);
		axios.defaults.headers.common.Authorization =
			"Bearer " + token;

		axios
			.get("auth/whoami")
			.then((res) => {
				setUser(res.data.data);
				setRol(res.data.data.role);
			})
			.catch((e) => {
				console.log(e);
			});
	}
} catch (error) {
	console.log(error)
}
		
	}, []);


	// const join = async (params) => {
	//   try {
	//     const { data } = await axios.post('auth/sign_up', {
	//       ...params,
	//       // phone: `+91${params.phone}`,
	//     });

	//     set(data.token);
	//     localStorage.setItem('token', data.token);
	//   } catch (e) {
	//     console.log(e);
	//   }

	// const join = async (
	// 	name,
	// 	email,
	// 	password,
	// 	confirmPassword,
	// 	role,
	// ) => {
	// 	try {
	// 		const { data } = await axios.post(
	// 			"auth/sign_up",
	// 			{
	// 				name,
	// 				email,
	// 				password,
	// 				confirmPassword,
	// 				role,
	// 			},
	// 		);
	// 		set(data.token);
	// 		localStorage.setItem("token", data.token);
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// };

	// this is the function to logout the user by deleting the token from the local storage
	const logout = () => {
		setToken(null);
		localStorage.removeItem("token");
		axios.defaults.headers.common.Authorization = null;
		// setUser(null)
		Cookies.remove("authorization")
	};

// this is the function to add employee details...................

const addDetails = async(
	post, 
	department,
	qualification,
	fathersName,
	mothersName,
	dob,
	category,
	religion,
	nationality,
	aadharNo,
	address
	)=>{
	try {
		const empData=await axios.post("newEmployee/add_details", {
			post,
			department,
			qualification,
			fathersName,
			mothersName,
			dob,
			category,
			religion,
			nationality,
			aadharNo,
			address,
		});
		setEmployee(empData.data)
		console.log("this is employee", employee)
	} catch (error) {
		console.log(error)
	}
}

// `````````````````````````` UPDATE EMPLOYEE...................................
const updateEmployee= async(
	emp_id,
	name,
	email,
	post,
	department,
	qualification,
	fathersName,
	mothersName,
	dob,
	category,
	religion,
	nationality,
	aadharNo,
	address,
)=>{
	try {
		const empData = await axios.put(
			"newEmployee/update_Employee",
			{
				emp_id,
				name,
				email,
				post,
				department,
				qualification,
				fathersName,
				mothersName,
				dob,
				category,
				religion,
				nationality,
				aadharNo,
				address,
			},
		);
		setEmployee(empData.data);
		// console.log("this is employee", employee);
	} catch (error) {
		console.log(error);
	}
}





	// these are some imp values which are globally available to the application
	const value = {
		token,
		signIn,
		// join,
		logout,
		user,
		rol,
		employee,
		updateEmployee,
		addDetails,
	};

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	);
}

export default useAuth;
