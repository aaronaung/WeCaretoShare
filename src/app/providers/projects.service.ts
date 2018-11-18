import { Injectable } from '@angular/core';
import { GlobalGivingHttpService } from './http.gg.service';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private context: string = 'projectservice'

  constructor(private httpService: GlobalGivingHttpService) { 

  }

  getFeaturedProjects() {
    return this.httpService.get({}, `${this.context}/featured/projects`)
              .pipe(map((res) => res.projects.project));
  }
}
