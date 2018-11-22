import { Injectable } from '@angular/core';
import { GlobalGivingHttpService } from './globalgivinghttp.service';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalGivingService {
  private projectCtx: string = 'projectservice';
  private serviceCtx: string = 'services';

  constructor(private httpService: GlobalGivingHttpService) {}

  getFeaturedProjects() {
    return this.httpService.get({}, `${this.projectCtx}/featured/projects`)
              .pipe(map((res) => res.projects.project));
  }

  getThemes() {
    return this.httpService.get({}, `${this.projectCtx}/themes`)
              .pipe(map((res) => res.themes.theme));
  }

  searchProjects(query) {
    return this.httpService.get(query, `${this.serviceCtx}/search/projects`)
  }
}
