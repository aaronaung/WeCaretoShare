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
            .pipe(map((res) => this.parseProjects(res.projects.project)));
  }

  getThemes() {
    return this.httpService.get({}, `${this.projectCtx}/themes`)
            .pipe(map((res) => res.themes.theme));
  }

  searchProjects(query) {
    return this.httpService.get(query, `${this.serviceCtx}/search/projects`)
            .pipe(map((res) => {
              res.search.response.projects = res.search.response.projects ? this.parseProjects(res.search.response.projects.project) : [];
              return res.search.response;
            }));
  }

  numWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  parseProjects(projects) {
    return projects.map((p) => {
      let imgHQ = p.image.imagelink.slice(-2)[0].url;
      let fundedPercentage = parseInt(((p.funding * 100) / p.goal).toFixed(2));
      let status: 'success' | 'danger' | 'warning'

      p.funding = p.funding ? this.numWithCommas(p.funding) : 0;
      p.goal =  p.goal ? this.numWithCommas(p.goal): 0;
      p.remaining =  p.remaining ? this.numWithCommas(p.remaining): 0;
      
      if (0 <= fundedPercentage && fundedPercentage < 30) {
        status = 'danger'
      }
      if (30 <= fundedPercentage && fundedPercentage < 70) {
        status = 'warning';
      }
      if (70 <= fundedPercentage && fundedPercentage <= 100) {
        status = 'success'
      }

      return ({...p, 
        imgHQ,
        fundedPercentage,
        status
      });
    })
  }
}
