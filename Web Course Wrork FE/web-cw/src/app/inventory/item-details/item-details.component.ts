import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { item } from 'src/app/data/models/item';

@Component({
  selector: 'cw-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  item: item | undefined;
  isPublisherLoggedIn: boolean = false;
  isUserApplied: boolean = false;

  constructor(
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {

    // this.route.paramMap.pipe(
    //   switchMap(params => {
    //     let id = String(params.get('id'));
    //     return this.offerService.getById(id);
    //   })).subscribe(res=>{
    //   });

  }

  giveReview(isPositive: boolean, id: string | undefined): void {
    // this.offerService.giveReview(isPositive, id, this.identityService.getUserId()).subscribe(next =>{
    //   console.log(next);
    //   if(this.offer) this.offer.likes = next;
    // });
  }

  apply(id: string | undefined): void {
    // this.offerService.apply(id, this.identityService.getUserId()).subscribe(() => this.ngOnInit());
  }
}