import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { item } from 'src/app/data/models/item';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'cw-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  item: item | undefined;
  isPublisherLoggedIn: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router :Router,
    private inventoryService: InventoryService
    ) { }

  ngOnInit(): void {

     this.route.paramMap.pipe(
      switchMap(params => {
        let id = String(params.get('id'));
        return this.inventoryService.getById(id);
      })).subscribe(res=>{
        this.item = res;
      });

  }

  edit( id: string | undefined): void {
    // this.offerService.giveReview(isPositive, id, this.identityService.getUserId()).subscribe(next =>{
    //   console.log(next);
    //   if(this.offer) this.offer.likes = next;
    // });
  }

  delete(id: string | undefined): void {
    this.inventoryService.delete(id).subscribe( next => {
      if(next) this.router.navigate(['catalog'])
    });
  }
}