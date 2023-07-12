import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style/index.css";
import App from "./App";

import { AuthContextProvider } from "./context/Auth.context";

import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import { MantineProvider } from "@mantine/core";

axios.defaults.baseURL = "http://localhost:8000/api/v1/";

axios.defaults.withCredentials = true;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<AuthContextProvider>
			<MantineProvider
				theme={{ colorScheme: "dark" }}
				withGlobalStyles
				withNormalizeCSS
			>
				<Router>
					<App />
				</Router>
			</MantineProvider>
		</AuthContextProvider>
	</React.StrictMode>,
);
