<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import NewestRestaurants from '../components/NewestRestaurants.vue'

const dummyData = {
  "restaurants": [
    {
      "id": 4,
      "name": "Mr. Rusty Hilll",
      "tel": "775.546.7738",
      "address": "893 Gibson Way",
      "opening_hours": "08:00",
      "description": "Sunt consequatur aspernatur eum eaque consectetur quia non. Et sit minima nostrum quae dignissimos vero illo doloribus non. Modi sint praesentium. Et incidunt porro quis nihil alias veritatis sed.\n \rAperiam similique est aut sit distinctio ad et. Facilis eveniet harum quaerat eum. Assumenda quibusdam facilis asperiores dignissimos maiores. Libero qui odit. Officia repudiandae corrupti cupiditate aut dolor voluptas. Quia id numquam quisquam eum.\n \rVoluptas est quis excepturi. Sed ipsa aut odio vel aut veritatis in. Id ut doloribus. Eos et voluptate eum optio quia quia distinctio iste. Vero unde nostrum rem eos harum. Maiores cupiditate officiis totam perspiciatis et esse qui perferendis.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=89.16004556968416",
      "viewCounts": 0,
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z"
      }
    },
    {
      "id": 6,
      "name": "May Walker",
      "tel": "901.595.3720 x786",
      "address": "1804 Fannie Centers",
      "opening_hours": "08:00",
      "description": "Perferendis aut mollitia et. Quaerat dolor quas fugit nihil rerum et perspiciatis et. Voluptates quia et omnis ex enim excepturi cum consequuntur.\n \rDebitis quasi cupiditate aut asperiores temporibus nobis. Quos id qui repellat ut. Est dolores expedita eligendi et voluptatem dolores.\n \rBeatae doloribus soluta omnis molestiae dolor quia culpa. Accusamus nesciunt id at quia. Asperiores vitae tempore qui officiis est libero. Autem sit exercitationem sint et. Vel est inventore dolores similique qui animi dolor maxime. Voluptatem quam sint autem aut voluptatibus temporibus molestiae qui.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=57.48139402721577",
      "viewCounts": 0,
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z"
      }
    },
    {
      "id": 7,
      "name": "Jordane Krajcik",
      "tel": "(801) 768-7427",
      "address": "2233 Blick Isle",
      "opening_hours": "08:00",
      "description": "Et eligendi quo maxime quod praesentium magni laboriosam qui. Sed ducimus unde enim odio commodi. Rerum enim et voluptas quia itaque nam. Sed quo fugit in sunt accusantium minima et officiis. Ipsam porro sapiente.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=30.024383303839365",
      "viewCounts": 0,
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z"
      }
    },
    {
      "id": 8,
      "name": "Rogelio Stamm",
      "tel": "(893) 292-6072",
      "address": "9895 Freddy Turnpike",
      "opening_hours": "08:00",
      "description": "Reiciendis laboriosam ut nemo.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=94.39611636823813",
      "viewCounts": 0,
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z"
      }
    },
    {
      "id": 9,
      "name": "Gardner DuBuque",
      "tel": "393-801-6256 x99131",
      "address": "4618 Bartell Isle",
      "opening_hours": "08:00",
      "description": "Numquam aut fugiat voluptas nostrum. Necessitatibus facere qui harum exercitationem ullam incidunt dolores. Aut modi veniam est fuga iure eveniet. Velit est eos. Mollitia itaque natus laborum dicta.\n \rRatione ea fuga ipsa doloribus. Vero est voluptas similique non consequatur id. Maxime provident at et ea. Et eum sit. Et est qui atque pariatur consequatur ut harum quia tempore.\n \rImpedit illum molestiae qui. Consequatur sit aspernatur. Et vel doloremque.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=5.61438914169945",
      "viewCounts": 0,
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z"
      }
    },
    {
      "id": 10,
      "name": "Hailee Hintz",
      "tel": "(201) 774-8720",
      "address": "614 Larkin Path",
      "opening_hours": "08:00",
      "description": "debitis",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=32.813832624134065",
      "viewCounts": 0,
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z"
      }
    },
    {
      "id": 11,
      "name": "Santino Muller",
      "tel": "721.408.7009",
      "address": "855 Strosin Ville",
      "opening_hours": "08:00",
      "description": "Quis nihil voluptatibus.\nQui doloribus neque sint mollitia consequatur id odio.\nRepudiandae quam debitis at ut inventore velit.\nDistinctio omnis quibusdam maiores reiciendis provident non eos incidunt.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=5.366587449772187",
      "viewCounts": 0,
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z"
      }
    },
    {
      "id": 12,
      "name": "Emilie Koch",
      "tel": "(930) 536-4651 x52312",
      "address": "89201 Presley Overpass",
      "opening_hours": "08:00",
      "description": "impedit",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=72.52824074146105",
      "viewCounts": 0,
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z"
      }
    },
    {
      "id": 13,
      "name": "Augustine Rutherford",
      "tel": "742-670-9360 x39802",
      "address": "891 Reagan Row",
      "opening_hours": "08:00",
      "description": "Facilis aperiam voluptas nemo voluptate id vero ut praesentium.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=94.53579399385697",
      "viewCounts": 0,
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z"
      }
    },
    {
      "id": 14,
      "name": "Glennie Trantow",
      "tel": "(820) 255-0025",
      "address": "6324 Kyleigh Divide",
      "opening_hours": "08:00",
      "description": "Sed velit distinctio est perferendis nisi voluptas.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.901037749853652",
      "viewCounts": 0,
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z"
      }
    }
  ],
  "comments": [
    {
      "id": 10,
      "text": "Laboriosam totam culpa quisquam.",
      "UserId": 1,
      "RestaurantId": 10,
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z",
      "User": {
        "id": 1,
        "name": "root",
        "email": "root@example.com",
        "password": "$2a$10$oRTst038U9ITl2Csj2KMde0S5/WVSi.RxxCcjxnPyfzHZceo4QJ4W",
        "isAdmin": true,
        "image": null,
        "createdAt": "2022-08-01T03:06:33.000Z",
        "updatedAt": "2022-08-01T03:06:33.000Z"
      },
      "Restaurant": {
        "id": 10,
        "name": "Hailee Hintz",
        "tel": "(201) 774-8720",
        "address": "614 Larkin Path",
        "opening_hours": "08:00",
        "description": "debitis",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=32.813832624134065",
        "viewCounts": 0,
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z",
        "CategoryId": 4
      }
    },
    {
      "id": 30,
      "text": "Nemo debitis aut aut atque asperiores doloribus rem sint.",
      "UserId": 1,
      "RestaurantId": 30,
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z",
      "User": {
        "id": 1,
        "name": "root",
        "email": "root@example.com",
        "password": "$2a$10$oRTst038U9ITl2Csj2KMde0S5/WVSi.RxxCcjxnPyfzHZceo4QJ4W",
        "isAdmin": true,
        "image": null,
        "createdAt": "2022-08-01T03:06:33.000Z",
        "updatedAt": "2022-08-01T03:06:33.000Z"
      },
      "Restaurant": {
        "id": 30,
        "name": "Eulah Schaden",
        "tel": "021-091-2867 x033",
        "address": "5495 O'Hara Estate",
        "opening_hours": "08:00",
        "description": "Nihil natus nihil sit.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=1.2538007504465432",
        "viewCounts": 0,
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z",
        "CategoryId": 3
      }
    },
    {
      "id": 60,
      "text": "Aliquid quaerat aut culpa.",
      "UserId": 1,
      "RestaurantId": 10,
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z",
      "User": {
        "id": 1,
        "name": "root",
        "email": "root@example.com",
        "password": "$2a$10$oRTst038U9ITl2Csj2KMde0S5/WVSi.RxxCcjxnPyfzHZceo4QJ4W",
        "isAdmin": true,
        "image": null,
        "createdAt": "2022-08-01T03:06:33.000Z",
        "updatedAt": "2022-08-01T03:06:33.000Z"
      },
      "Restaurant": {
        "id": 10,
        "name": "Hailee Hintz",
        "tel": "(201) 774-8720",
        "address": "614 Larkin Path",
        "opening_hours": "08:00",
        "description": "debitis",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=32.813832624134065",
        "viewCounts": 0,
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z",
        "CategoryId": 4
      }
    },
    {
      "id": 86,
      "text": "Eum et atque accusantium quo quasi amet quis perspiciatis.",
      "UserId": 1,
      "RestaurantId": 36,
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z",
      "User": {
        "id": 1,
        "name": "root",
        "email": "root@example.com",
        "password": "$2a$10$oRTst038U9ITl2Csj2KMde0S5/WVSi.RxxCcjxnPyfzHZceo4QJ4W",
        "isAdmin": true,
        "image": null,
        "createdAt": "2022-08-01T03:06:33.000Z",
        "updatedAt": "2022-08-01T03:06:33.000Z"
      },
      "Restaurant": {
        "id": 36,
        "name": "Ursula Predovic",
        "tel": "907.796.5543",
        "address": "964 Jacobi Route",
        "opening_hours": "08:00",
        "description": "Pariatur amet quis. Adipisci consequatur modi deleniti quae impedit expedita unde. Dicta accusantium numquam sed nulla. Repellendus ut et. Dolores accusantium voluptas. Quam velit alias eius aut error.\n \rQuidem ea soluta soluta vel aut harum vitae. Molestiae quia labore commodi. Et quisquam odio ut deleniti modi sequi et ea. Omnis ut omnis deleniti sed est exercitationem sunt est rerum. Animi ipsam quibusdam omnis aperiam possimus eius eum sint. Asperiores quisquam deleniti.\n \rEt ex inventore qui consequatur. In quis aliquam voluptate cupiditate. Soluta cumque modi quae. Id aut molestias et.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=11.995013346298823",
        "viewCounts": 0,
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z",
        "CategoryId": 1
      }
    },
    {
      "id": 114,
      "text": "Aliquam ea perspiciatis adipisci quia nisi.",
      "UserId": 1,
      "RestaurantId": 14,
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z",
      "User": {
        "id": 1,
        "name": "root",
        "email": "root@example.com",
        "password": "$2a$10$oRTst038U9ITl2Csj2KMde0S5/WVSi.RxxCcjxnPyfzHZceo4QJ4W",
        "isAdmin": true,
        "image": null,
        "createdAt": "2022-08-01T03:06:33.000Z",
        "updatedAt": "2022-08-01T03:06:33.000Z"
      },
      "Restaurant": {
        "id": 14,
        "name": "Glennie Trantow",
        "tel": "(820) 255-0025",
        "address": "6324 Kyleigh Divide",
        "opening_hours": "08:00",
        "description": "Sed velit distinctio est perferendis nisi voluptas.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.901037749853652",
        "viewCounts": 0,
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z",
        "CategoryId": 2
      }
    },
    {
      "id": 138,
      "text": "Distinctio omnis itaque beatae autem amet iste.",
      "UserId": 1,
      "RestaurantId": 38,
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z",
      "User": {
        "id": 1,
        "name": "root",
        "email": "root@example.com",
        "password": "$2a$10$oRTst038U9ITl2Csj2KMde0S5/WVSi.RxxCcjxnPyfzHZceo4QJ4W",
        "isAdmin": true,
        "image": null,
        "createdAt": "2022-08-01T03:06:33.000Z",
        "updatedAt": "2022-08-01T03:06:33.000Z"
      },
      "Restaurant": {
        "id": 38,
        "name": "Wyatt Goyette",
        "tel": "1-473-841-5204 x1140",
        "address": "2570 Nitzsche Ports",
        "opening_hours": "08:00",
        "description": "Atque provident voluptatem sed aut perspiciatis provident. Earum quod voluptas repellat hic et omnis tempore. Exercitationem neque possimus. A ut voluptas quisquam sed similique. Possimus iure odio. Molestiae delectus et sed.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=72.17563596768677",
        "viewCounts": 0,
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z",
        "CategoryId": 1
      }
    },
    {
      "id": 17,
      "text": "Tempora et qui ut ut non.",
      "UserId": 2,
      "RestaurantId": 17,
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z",
      "User": {
        "id": 2,
        "name": "user1",
        "email": "user1@example.com",
        "password": "$2a$10$Z0x.yF5BAKzPGwJjAymI9u0ogykem9wfv0uNJ58avWTlNseeFbPR6",
        "isAdmin": false,
        "image": null,
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z"
      },
      "Restaurant": {
        "id": 17,
        "name": "Alec Bayer Jr.",
        "tel": "676-851-0092 x620",
        "address": "607 Mabelle Village",
        "opening_hours": "08:00",
        "description": "et repellat odio",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=22.518456697885902",
        "viewCounts": 0,
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z",
        "CategoryId": 3
      }
    },
    {
      "id": 43,
      "text": "Et et odit aut vitae voluptas.",
      "UserId": 2,
      "RestaurantId": 43,
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z",
      "User": {
        "id": 2,
        "name": "user1",
        "email": "user1@example.com",
        "password": "$2a$10$Z0x.yF5BAKzPGwJjAymI9u0ogykem9wfv0uNJ58avWTlNseeFbPR6",
        "isAdmin": false,
        "image": null,
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z"
      },
      "Restaurant": {
        "id": 43,
        "name": "Ardith Zieme",
        "tel": "(547) 304-2592",
        "address": "13457 Botsford Manor",
        "opening_hours": "08:00",
        "description": "Porro dolores cupiditate.\nIpsam ratione officiis.\nNam et quos quidem possimus labore.\nId pariatur est quidem blanditiis.\nAut autem animi.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=75.16675371084143",
        "viewCounts": 0,
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z",
        "CategoryId": 5
      }
    },
    {
      "id": 73,
      "text": "Impedit at voluptate ut.",
      "UserId": 2,
      "RestaurantId": 23,
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z",
      "User": {
        "id": 2,
        "name": "user1",
        "email": "user1@example.com",
        "password": "$2a$10$Z0x.yF5BAKzPGwJjAymI9u0ogykem9wfv0uNJ58avWTlNseeFbPR6",
        "isAdmin": false,
        "image": null,
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z"
      },
      "Restaurant": {
        "id": 23,
        "name": "Kellen Prohaska",
        "tel": "838.259.1194 x65690",
        "address": "217 Quinn Prairie",
        "opening_hours": "08:00",
        "description": "Laudantium ea illo voluptatem est. Modi non molestiae. Cumque et expedita vitae veniam.\n \rOmnis sequi qui voluptatem voluptatem et et quia dolores rerum. Sint dolorem sunt cumque. Modi dignissimos rerum ipsum ex molestias atque qui in. Laudantium explicabo et molestiae. Dicta alias sit nihil.\n \rEx molestias commodi nemo officia. Voluptatum dolorem quidem omnis ullam eaque quia quia incidunt. Doloribus dicta ut et quia cum ut laudantium qui. Corporis asperiores numquam nam aperiam omnis architecto sunt sit.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=27.370987360462017",
        "viewCounts": 0,
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z",
        "CategoryId": 1
      }
    },
    {
      "id": 88,
      "text": "Blanditiis nisi voluptatem quis nostrum unde.",
      "UserId": 2,
      "RestaurantId": 38,
      "createdAt": "2022-08-01T03:06:34.000Z",
      "updatedAt": "2022-08-01T03:06:34.000Z",
      "User": {
        "id": 2,
        "name": "user1",
        "email": "user1@example.com",
        "password": "$2a$10$Z0x.yF5BAKzPGwJjAymI9u0ogykem9wfv0uNJ58avWTlNseeFbPR6",
        "isAdmin": false,
        "image": null,
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z"
      },
      "Restaurant": {
        "id": 38,
        "name": "Wyatt Goyette",
        "tel": "1-473-841-5204 x1140",
        "address": "2570 Nitzsche Ports",
        "opening_hours": "08:00",
        "description": "Atque provident voluptatem sed aut perspiciatis provident. Earum quod voluptas repellat hic et omnis tempore. Exercitationem neque possimus. A ut voluptas quisquam sed similique. Possimus iure odio. Molestiae delectus et sed.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=72.17563596768677",
        "viewCounts": 0,
        "createdAt": "2022-08-01T03:06:34.000Z",
        "updatedAt": "2022-08-01T03:06:34.000Z",
        "CategoryId": 1
      }
    }
  ]
}

export default {
  name: 'RestaurantsFeeds',
  components: {
    NavTabs,
    NewestRestaurants
  },
  data() {
    return {
      restaurants: [],
      comments: []
    }
  },
  created() {
    this.fetchFeeds()
  },
  methods: {
    fetchFeeds() {
      this.restaurants = dummyData.restaurants
      this.comments = dummyData.comments
    }
  }
}
</script>