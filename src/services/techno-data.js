import axios from "axios";

export class TechnoApiService {
    getAllRecords() {
        return axios.get("http://localhost:3000/health-checks");
    }

    getTreadmillsById(id) {
        return axios.get("http://localhost:3000/api/v1/treadmills" + id);
      }

    getAllTreadmill() {
        return axios.get("http://localhost:3000/api/v1/treadmills");
    }

    getAllCenters(){
        return axios.get("http://localhost:3000/api/v1/centers");
    }
}