import { CommonModule, LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchParComponent } from './search-par/search-par.component';
import { DisplayUsersComponent } from './display-users/display-users.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SearchParComponent,
    DisplayUsersComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [LowerCasePipe]
})
export class AppComponent {
  dataFromSearch!: any;

  title = 'rahma';
  allUsers: any[] = [
    {
      id: 1,
      firstName: 'Emily',
      email: 'emily.johnson@x.dummyjson.com',
      phone: '+81 965-431-3024',
      image: 'https://dummyjson.com/icon/emilys/128',
      role: 'user',
    },
    {
      id: 2,
      firstName: 'Michael',
      email: 'michael.williams@x.dummyjson.com',
      phone: '+49 258-627-6644',
      image: 'https://dummyjson.com/icon/michaelw/128',
      role: 'user',
    },
    {
      id: 3,
      firstName: 'Sophia',
      email: 'sophia.brown@x.dummyjson.com',
      phone: '+81 210-652-2785',
      image: 'https://dummyjson.com/icon/sophiab/128',
      role: 'user',
    },
    {
      id: 4,
      firstName: 'James',
      email: 'james.davis@x.dummyjson.com',
      phone: '+49 614-958-9364',
      image: 'https://dummyjson.com/icon/jamesd/128',
      role: 'admin',
    },
    {
      id: 5,
      firstName: 'Emma',
      email: 'emma.miller@x.dummyjson.com',
      phone: '+91 759-776-1614',
      image: 'https://dummyjson.com/icon/emmaj/128',

      role: 'user',
    },
    {
      id: 6,
      firstName: 'Olivia',
      email: 'olivia.wilson@x.dummyjson.com',
      phone: '+91 607-295-6448',
      image: 'https://dummyjson.com/icon/oliviaw/128',
      role: 'admin',
    },
    {
      id: 7,
      firstName: 'Alexander',
      email: 'alexander.jones@x.dummyjson.com',
      phone: '+61 260-824-4986',
      image: 'https://dummyjson.com/icon/alexanderj/128',
      role: 'user',
    },
    {
      id: 8,
      firstName: 'Ava',
      email: 'ava.taylor@x.dummyjson.com',
      phone: '+1 458-853-7877',
      image: 'https://dummyjson.com/icon/avat/128',

      role: 'admin',
    },
    {
      id: 9,
      firstName: 'Ethan',
      email: 'ethan.martinez@x.dummyjson.com',
      phone: '+92 933-608-5081',
      image: 'https://dummyjson.com/icon/ethanm/128',

      role: 'user',
    },
    {
      id: 10,
      firstName: 'Isabella',
      email: 'isabella.anderson@x.dummyjson.com',
      phone: '+49 770-658-4885',
      image: 'https://dummyjson.com/icon/isabellad/128',

      role: 'user',
    },
    {
      id: 11,
      firstName: 'Liam',
      email: 'liam.garcia@x.dummyjson.com',
      phone: '+92 870-217-6201',
      image: 'https://dummyjson.com/icon/liamg/128',

      role: 'admin',
    },
    {
      i: 12,
      firstName: 'Mia',
      email: 'mia.rodriguez@x.dummyjson.com',
      phone: '+49 989-461-8403',
      image: 'https://dummyjson.com/icon/miar/128',
      role: 'admin',
    },
    {
      firstName: 'Noah',
      email: 'noah.hernandez@x.dummyjson.com',
      phone: '+49 393-605-6968',
      image: 'https://dummyjson.com/icon/noahh/128',
      role: 'admin',
    },
    {
      id: 14,
      firstName: 'Charlotte',
      email: 'charlotte.lopez@x.dummyjson.com',
      phone: '+44 373-953-5028',
      image: 'https://dummyjson.com/icon/charlottem/128',
      role: 'admin',
    },
    {
      id: 15,
      firstName: 'William',
      email: 'william.gonzalez@x.dummyjson.com',
      phone: '+81 905-252-7319',
      image: 'https://dummyjson.com/icon/williamg/128',
      role: 'admin',
    },
    {
      id: 16,
      firstName: 'Avery',
      email: 'avery.perez@x.dummyjson.com',
      phone: '+61 731-431-3457',
      image: 'https://dummyjson.com/icon/averyp/128',
      role: 'user',
    },
    {
      id: 17,
      firstNam: 'Evelyn',
      email: 'evelyn.sanchez@x.dummyjson.com',
      phone: '+1 623-880-6871',
      image: 'https://dummyjson.com/icon/evelyns/128',
      role: 'user',
    },
    {
      id: 18,
      firstName: 'Logn',
      email: 'logan.torres@x.dummyjson.com',
      phone: '+81 507-434-8733',
      image: 'https://dummyjson.com/icon/logant/128',
      role: 'user',
    },
    {
      id: 19,
      firstName: 'Abigail',
      email: 'abigail.rivera@x.dummyjson.com',
      phone: '+91 228-363-7806',
      image: 'https://dummyjson.com/icon/abigailr/128',
      role: 'user',
    },
    {
      id: 20,
      firstName: 'Jackson',
      email: 'jackson.evans@x.dummyjson.com',
      phone: '+44 468-628-6686',
      image: 'https://dummyjson.com/icon/jacksone/128',
      role: 'user',
    },
    {
      id: 21,
      firstName: 'Madison',
      email: 'madison.collins@x.dummyjson.com',
      phone: '+81 259-957-5711',
      image: 'https://dummyjson.com/icon/madisonc/128',
      role: 'user',
    },
    {
      id: 22,
      firstName: 'Elijah',
      email: 'elijah.stewart@x.dummyjson.com',
      phone: '+44 468-357-7872',
      image: 'https://dummyjson.com/icon/elijahs/128',
      role: 'user',
    },
    {
      id: 23,
      firstName: 'Chloe',
      email: 'chloe.morales@x.dummyjson.com',
      phone: '+92 468-541-7133',
      image: 'https://dummyjson.com/icon/chloem/128',
      role: 'user',
    },
    {
      id: 24,
      firstName: 'Mateo',
      email: 'mateo.nguyen@x.dummyjson.com',
      phone: '+1 341-597-6694',
      image: 'https://dummyjson.com/icon/mateon/128',
      role: 'user',
    },
    {
      id: 25,
      firstName: 'Harper',
      email: 'haper.kelly@x.dummyjson.com',
      phone: '+92 518-863-2863',
      image: 'https://dummyjson.com/icon/harpere/128',

      role: 'user',
    },
    {
      id: 26,
      firstName: 'Evelyn',
      email: 'evely.gonzalez@x.dummyjson.com',
      phone: '+61 708-508-4638',
      image: 'https://dummyjson.com/icon/evelyng/128',
      role: 'user',
    },
    {
      id: 27,
      firstName: 'Daniel',
      email: 'daniel.cook@x.dmmyjson.com',
      phone: '+44 254-761-6843',
      image: 'https://dummyjson.com/icon/danielc/128',
      role: 'user',
    },
    {
      id: 28,
      firstName: 'Lily',
      email: 'lily.lee@x.dummyjson.com',
      pone: '+1 808-757-9867',
      image: 'https://dummyjson.com/icon/lilyb/128',
      role: 'user',
    },
    {
      id: 29,
      firstName: 'Henry',
      email: 'henry.hill@x.dummyjson.com',
      phon: '+1 240-833-4680',
      image: 'https://dummyjson.com/icon/henryh/128',
      role: 'user',
    },
    {
      id: 30,
      firstName: 'Addison',
      email: 'addison.wright@x.dummyjson.com',
      phon: '+1 514-384-3300',
      image: 'https://dummyjson.com/icon/addisonw/128',
      role: 'user',
    },
  ];

  currentUsers: any[] = this.allUsers;
  constructor(private lowerCasePipe: LowerCasePipe) {}

  addData(data: string) {
    this.dataFromSearch = data.trim();
    const lowerCaseData =
      this.lowerCasePipe.transform(this.dataFromSearch) || '';

    this.currentUsers = this.allUsers.filter((user) => {
      const lowerCaseUserName =
        this.lowerCasePipe.transform(user.firstName) || '';
      return lowerCaseUserName.includes(lowerCaseData);
    });

    console.log(this.currentUsers);
  }


}
