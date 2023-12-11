import { useMemo } from "react"
import { CssBaseline, ThemeProvider } from "@mui/material"
import {createTheme} from "@mui/material/styles" 
import { themeSettings } from "./theme"
import { useSelector } from "react-redux"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Layout from "./scenes/layout"
import Dashboard from "./scenes/dashboard"
import Products from "./scenes/products"
import Customers from "./scenes/customers"
import Transactions from "./scenes/transactions"

function App() {
  const mode = useSelector((state)=> state.theme.mode)
  const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode])
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
           <CssBaseline /> {/*reset the user agent css */}
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace/>}/> {/*when user hits / redirect to /dashboard */}
              <Route path="/dashboard" element={<Dashboard />}/>
              <Route path="/products" element={<Products />}/>
              <Route path="/customers" element={<Customers />}/>
              <Route path="/transactions" element={<Transactions />}/>
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
