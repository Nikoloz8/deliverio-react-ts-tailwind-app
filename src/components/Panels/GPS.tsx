import axios from "axios";

export default function GPS() {

    const getLocation = async () => {
        try {
            const response = await axios.get("https://maps.googleapis.com/maps/api/js?key=AIzaSyANIql91wk5wmOPH2rKWfINFbimReOi2f0&callback=initMap&libraries=places&v=weekly")
            console.log(response.data)
        } catch (error) {
            console.error("Error fetching Google Maps API:", error);
        }
    }

    getLocation()

    return (
        <div
        ></div>
    )
}
