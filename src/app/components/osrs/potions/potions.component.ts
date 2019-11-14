import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { Potion } from 'src/app/interfaces/potion';

@Component({
  selector: 'app-potions',
  templateUrl: './potions.component.html',
  styleUrls: ['./potions.component.css']
})
export class PotionsComponent implements OnInit {
  private buchu: Item = { name: 'Buchu', alt: 'Buchu', image: 'assets/buchu.png' };
  private noxifer: Item = { name: 'Noxifer', alt: 'Noxifer', image: 'assets/noxifer.png' };
  private golpar: Item = { name: 'Golpar', alt: 'golpar', image: 'assets/golpar.png' };
  private mushroom: Item = { name: 'Stinkhorn Mushroom', alt: 'mushroom', image: 'assets/mushroom.png' };
  private cicely: Item = { name: 'Cicely', alt: 'cicely', image: 'assets/cicely.png' };
  private juice: Item = { name: 'Endarkened Juice', alt: 'endarkened juice', image: 'assets/juice.png' };
  private water: Item = { name: 'Water-filled Gourd', alt: 'Water Filled Gourd', image: 'assets/water.png' };

  private kodai: Potion = { name: 'Kodai Potion',
    alt: 'Kodai Potion',
    description: 'Boosts magic level',
    image: 'assets/kodai.png',
    ingredients: [this.golpar, this.juice, this.water],
    headerClass: 'header-image-kodai'
  };

  private elder: Potion = { name: 'Elder Potion',
    alt: 'Elder Potion',
    description: 'Boosts melee combat levels',
    image: 'assets/elder.png',
    ingredients: [this.golpar, this.mushroom, this.water],
    headerClass: 'header-image-elder'
  };

  private twisted: Potion = { name: 'Twisted Potion',
    alt: 'Twisted Potion',
    description: 'Boosts range level',
    image: 'assets/twisted.png',
    ingredients: [this.golpar, this.cicely, this.water],
    headerClass: 'header-image-twisted'
  };

  private overload: Potion = { name: 'Overload Potion',
    alt: 'Overload Potion',
    description: 'Boosts all combat levels',
    image: 'assets/overload.png',
    ingredients: [this.noxifer, this.kodai, this.twisted, this.elder],
    headerClass: 'header-image-overload'
  };

  private restore: Potion = { name: 'Revitalisation Potion',
    alt: 'Revitalisation Potion',
    description: 'Restores drained stats and prayer points',
    image: 'assets/restore.png',
    ingredients: [this.buchu, this.mushroom, this.water],
    headerClass: 'header-image-restore'
  };

  private brew: Potion = { name: 'Xeric\'s aid',
    alt: 'Xeric\'s Aid',
    description: 'Drains combat stats. Restores HP and Defence',
    image: 'assets/brew.png',
    ingredients: [this.buchu, this.juice, this.water],
    headerClass: 'header-image-brew'
  };

  private prayer: Potion = { name: 'Prayer Enhance',
    alt: 'Prayer Enhance',
    description: 'Gradually restores prayer points over time',
    image: 'assets/prayer.png',
    ingredients: [this.buchu, this.cicely, this.water],
    headerClass: 'header-image-prayer'
  };

  protected combatPotions: Potion[] = [this.kodai, this.elder, this.twisted, this.overload];
  protected otherPotions: Potion[] = [this.restore, this.brew, this.prayer];

  constructor() { }

  ngOnInit() {
  }

}
