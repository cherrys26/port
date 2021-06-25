import axios from 'axios';

export default class ProjectsService {
    getProjects() {
        return axios.get('data/Projects.json').then(res => res.data.data);
    }
}
