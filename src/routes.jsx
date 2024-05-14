import { DashboardPage } from "./pages/dashboard"
import { Programador } from "./pages/programador"

const routes =[
    {path:  '/', element: <DashboardPage/>},
    {path:  '/programador', element: <Programador/>}
]
export default routes