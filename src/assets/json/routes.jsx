import DashboardIcon from "../../components/icons/dashboard/icon";
import StatisticsIcon from "../../components/icons/statistics/icon";

export const routes = [
    {
        pathname: "/", 
        icon: <DashboardIcon />,
        name: "Enjamlar"
    }, 
    {
        pathname: "/manage", 
        icon: <StatisticsIcon />,
        name: "Dolandyryş"
    }, 
]