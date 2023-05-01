import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../components/Home';
import Country from "../components/Country";


// export default () => ( 
//     <BrowserRouter> 
//         <Routes>
//             <Route element={<PrivateRoute />}>
//                 <Route path='/' element={<Header />} exact>
//                     <Route index element={<DashboardPage />} />
//                     <Route path='incomes' element={ <IncomesPage /> }/>
//                     <Route path='expenses' element={ <ExpensesPage /> } />
//                     <Route path='help' element={ <HelpPage /> } /> 
//                 </Route>                   
//                 <Route path='addIncome' element={<AddIncomePage />} />
//                 <Route path='editIncome/:id' element={<EditIncomePage />} />
//                 <Route path='editExpense/:id' element={<EditExpensePage />} />
//                 <Route path='addExpense' element={<AddExpensePage />} />
//             </Route>
//             <Route element={<PublicRoute />}>
//                 <Route path='login' element={<LoginPage />} />
//             </Route>
//             <Route path='/*' element={ <NotFoundPage /> } />
//         </Routes>
//     </BrowserRouter>    
// )

export default () => ( 
    <BrowserRouter> 
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:country' element={<Country />} />
        </Routes>
    </BrowserRouter>    
)