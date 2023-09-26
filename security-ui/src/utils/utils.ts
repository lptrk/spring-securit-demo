export function formatRoute(routeToFormat: String): String {
    let formattedRoute = routeToFormat.replace('/', '')
    formattedRoute = capitalizeFirstLetter(formattedRoute)
    return formattedRoute
}

function capitalizeFirstLetter(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}