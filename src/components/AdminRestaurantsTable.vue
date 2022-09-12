<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">
          #
        </th>
        <th scope="col">
          Category
        </th>
        <th scope="col">
          Name
        </th>
        <th scope="col" width="300">
          操作
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : '未分類' }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link :to="{ name: 'admin-restaurant', params: { id: restaurant.id } }" class="btn btn-link">
            Show
          </router-link>

          <router-link :to="{name: 'admin-restaurant-edit', params:{id: restaurant.id}}" class="btn btn-link">Edit</router-link>

          <button @click.stop.prevent="deleteRestaurant(restaurant.id)" type="button" class="btn btn-link">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const dummyData = {
  "restaurants": [
    {
      "id": 1,
      "name": "Laury Gerlach",
      "tel": "(362) 086-0126 x4590",
      "address": "550 Walter Fields",
      "opening_hours": "08:00",
      "description": "enim apsxapsock",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=84.67624997722729",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-08-12T16:17:50.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 2,
      "name": "Akeem Fritsch",
      "tel": "1-697-211-1344",
      "address": "522 Giles Trace",
      "opening_hours": "08:00",
      "description": "Ea consequuntur magni temporibus.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=84.13658848690066",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-08-12T16:18:34.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 3,
      "name": "Colin Krajcik",
      "tel": "393-926-8798 x359",
      "address": "05595 Queenie Ranch",
      "opening_hours": "08:00",
      "description": "Ipsum sit ullam ipsa est voluptates.\nVitae rerum eveniet officia sint.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=30.006376222001663",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 4,
      "name": "Marshall Gaylord",
      "tel": "1-702-609-0767 x492",
      "address": "561 Feeney Gateway",
      "opening_hours": "08:00",
      "description": "Adipisci consequatur aut quo. Corrupti deleniti ratione perferendis aut amet quas dolorum sed. Nihil quisquam sed facilis distinctio illo soluta. Vel ea vel.\n \rOmnis ipsam modi fuga tempora et. Quasi impedit quibusdam fugit. Et eligendi molestiae rerum aut animi. Ut cumque et placeat quia aut est magnam esse aliquid. Illo a qui itaque nisi.\n \rAt nihil inventore ut omnis laudantium. Est ut necessitatibus. Doloribus consequuntur tempore voluptatem cum. Doloribus rerum id.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=10.700740126126075",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 5,
      "name": "Twila O'Keefe",
      "tel": "(027) 696-7860 x4755",
      "address": "8444 Marie Branch",
      "opening_hours": "08:00",
      "description": "Alias voluptas quaerat tempore ad debitis voluptas odio earum recusandae. In odio ab.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=61.15039511738027",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 6,
      "name": "Lorenzo Koch",
      "tel": "140.853.7597",
      "address": "70941 Armstrong Ford",
      "opening_hours": "08:00",
      "description": "ut",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=76.99098541611507",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 7,
      "name": "Samantha West",
      "tel": "678.870.9945 x62422",
      "address": "76766 Batz Mount",
      "opening_hours": "08:00",
      "description": "dolores",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=86.01566209916889",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 8,
      "name": "Dr. Cecilia Brown",
      "tel": "1-718-496-7110 x2414",
      "address": "25776 Stark Union",
      "opening_hours": "08:00",
      "description": "Provident quibusdam excepturi laborum.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=95.29247176756881",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 9,
      "name": "Ms. Myron Okuneva",
      "tel": "828.985.0275",
      "address": "1592 Benedict Streets",
      "opening_hours": "08:00",
      "description": "consequuntur",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=86.92110301285423",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 10,
      "name": "Carlo Cartwright",
      "tel": "936-324-7428",
      "address": "41240 Borer River",
      "opening_hours": "08:00",
      "description": "Totam asperiores illo praesentium.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=89.09145258006126",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 11,
      "name": "Jermaine Kihn",
      "tel": "(166) 208-9772 x489",
      "address": "815 Titus Pass",
      "opening_hours": "08:00",
      "description": "Omnis voluptas reprehenderit assumenda ipsam voluptate.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=92.85581325564432",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 12,
      "name": "Maurine Stracke",
      "tel": "511-708-8922 x9576",
      "address": "809 Jamar Streets",
      "opening_hours": "08:00",
      "description": "Accusamus sapiente officiis numquam doloribus at.\nQuod sapiente pariatur quos expedita quo voluptatum.\nConsectetur non sunt magni ea aut modi qui soluta consequatur.\nRerum facilis harum itaque dolorum.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=8.998453867959588",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 13,
      "name": "Alec Harber",
      "tel": "(827) 635-3789",
      "address": "132 Wiegand Burgs",
      "opening_hours": "08:00",
      "description": "Architecto laboriosam sequi distinctio facere soluta laudantium blanditiis ducimus suscipit.\nSimilique tempora quam unde inventore et officiis iste laboriosam.\nArchitecto reprehenderit expedita dolores consequuntur et similique.\nQuaerat natus vitae quia et ullam eaque.\nQuia quos dolore laboriosam non.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.945409489843664",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 14,
      "name": "Quinten Little",
      "tel": "669.169.0848 x5226",
      "address": "387 Rau Crossroad",
      "opening_hours": "08:00",
      "description": "Voluptas reprehenderit beatae quis explicabo.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=62.033733567833195",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 15,
      "name": "Madonna Batz",
      "tel": "(466) 210-9310 x888",
      "address": "13210 Felicity Walks",
      "opening_hours": "08:00",
      "description": "Totam id veniam ullam pariatur.\nSoluta nam consequuntur voluptas.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=28.94578359966289",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 16,
      "name": "Adolf Stehr",
      "tel": "896-603-0170 x937",
      "address": "88488 Toni Squares",
      "opening_hours": "08:00",
      "description": "deleniti",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=59.888310438024185",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 17,
      "name": "Marielle Ortiz",
      "tel": "090.226.3486",
      "address": "604 Baumbach Burgs",
      "opening_hours": "08:00",
      "description": "exercitationem",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=23.33473399026389",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 18,
      "name": "Joyce Raynor",
      "tel": "(608) 996-1690 x199",
      "address": "36338 Halvorson Vista",
      "opening_hours": "08:00",
      "description": "Laudantium voluptatibus sapiente quae dolores est hic.\nEt odio atque sed ut ut sequi qui ducimus.\nAsperiores repudiandae nisi quo est in blanditiis et.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=20.952346238429232",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 19,
      "name": "Kayleigh Oberbrunner",
      "tel": "1-895-463-8327 x0906",
      "address": "93406 Kuphal Grove",
      "opening_hours": "08:00",
      "description": "Minima et cum necessitatibus corrupti. Officia sed qui et temporibus quas sed quam quisquam quisquam. Repellendus inventore magni ea qui facere ipsa saepe libero. Quis assumenda quo quia quibusdam et quasi culpa cumque.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=7.16950474649154",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 20,
      "name": "Lavinia Kirlin",
      "tel": "208-860-5550",
      "address": "0674 Wilderman Greens",
      "opening_hours": "08:00",
      "description": "Aut qui voluptas ut error repellendus. Maiores culpa et culpa tenetur similique quo distinctio dicta.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=45.610483697984286",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 21,
      "name": "Rickie Gerhold",
      "tel": "1-410-608-1837 x946",
      "address": "5530 Jovany Radial",
      "opening_hours": "08:00",
      "description": "Expedita doloremque eius. Aliquid nihil dicta illo nam error quo provident. Dignissimos vel omnis eum repellendus vel dignissimos nam facere ea. Quidem aliquam aut quia corrupti. Fugit voluptatibus sint debitis. Sapiente facere et possimus.\n \rEt consequatur molestias. Optio deserunt optio minima nostrum. Velit minima magnam odit maiores quae vel aut ad a. Doloremque quia ipsum laudantium praesentium. Reprehenderit omnis sed iusto eos excepturi non.\n \rQuos voluptates dolore consectetur ut fugit laboriosam dignissimos qui culpa. Esse ullam quo qui. Dolorem enim omnis. A mollitia voluptatem fugiat neque eos. Ut ut itaque non aut nemo tenetur enim. Nesciunt sit rerum qui debitis recusandae.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=20.679910549535197",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 22,
      "name": "Oceane Douglas",
      "tel": "1-766-262-1057",
      "address": "278 Waylon Viaduct",
      "opening_hours": "08:00",
      "description": "corrupti",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=49.69762599890264",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 23,
      "name": "Ima Zieme",
      "tel": "1-954-669-7302",
      "address": "3219 Ophelia Burgs",
      "opening_hours": "08:00",
      "description": "Et porro nemo unde tempora velit corrupti quia facere. Nostrum non ducimus quisquam. Dolorem atque vitae voluptatem tempora totam et nihil. Et architecto praesentium ratione eos facilis odio. Ea dicta sit unde rem ut aut consequatur sed similique. Qui officia repudiandae non omnis distinctio sit ad.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=95.20424276714468",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 24,
      "name": "Maryse Ruecker III",
      "tel": "(516) 677-3088 x81380",
      "address": "8401 Hailee Corners",
      "opening_hours": "08:00",
      "description": "Adipisci voluptas magnam est et eos doloribus rerum fugiat. Libero vitae soluta nihil id quibusdam dolor qui. Culpa officia nemo quae sed sed eligendi earum. Velit inventore necessitatibus voluptatem eligendi. Vitae nulla ea. Maiores in porro quos velit beatae.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=40.81139568740299",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 25,
      "name": "Felipa Denesik DVM",
      "tel": "035.552.4922 x8173",
      "address": "8980 Melvin Stream",
      "opening_hours": "08:00",
      "description": "amet nam dignissimos",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=66.38302485877819",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 26,
      "name": "Blanche O'Hara",
      "tel": "1-589-326-7875 x66502",
      "address": "9347 Travon Bridge",
      "opening_hours": "08:00",
      "description": "Excepturi perferendis quam dolor quia aut consequatur consequatur quibusdam. Aliquid quo non aut molestiae adipisci asperiores sed. Inventore non voluptas ut eos voluptas error. Aliquam et deleniti aut ullam sed dolorem. Recusandae esse dolores. Et aut voluptate suscipit cumque quas laborum eveniet dolore id.\n \rQuis dolore aut aperiam qui facilis cumque accusantium quam. Consectetur rerum consequatur molestiae dicta sit ad est est. Eaque occaecati ullam molestiae accusamus aliquid veritatis voluptatem natus. Facere porro iusto rerum deserunt. Doloribus odio voluptas.\n \rCum et rerum placeat non eaque quaerat. Veritatis occaecati et distinctio totam ipsa laudantium. Facilis praesentium est illo dicta et iusto reiciendis nostrum.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=96.40962996792442",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 27,
      "name": "Ms. Charles Christiansen",
      "tel": "1-513-102-7895 x318",
      "address": "3640 Leora Cliffs",
      "opening_hours": "08:00",
      "description": "Illum ipsam optio corporis debitis. Vero rerum ut laborum ipsum soluta porro modi pariatur sequi. Asperiores eum consequatur quod aut iste. Animi nihil possimus non maiores. Magni ut deserunt ut sit nisi eius.\n \rUt aliquid veniam iure a. Aliquid accusantium quibusdam eveniet amet quibusdam consequatur illo qui. Saepe alias error eos qui consequatur maiores. Voluptas placeat quisquam alias eaque cum qui. Dolorum ut neque consequatur consequatur recusandae voluptas.\n \rCorrupti eius voluptatum ea sed qui velit fugiat aperiam. Totam distinctio pariatur incidunt voluptatem beatae ipsum iure. Dignissimos architecto rerum odio exercitationem numquam consequatur. Alias a doloribus. Eligendi perspiciatis et ab officia id qui.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=43.73700788978279",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 28,
      "name": "Breanna Satterfield",
      "tel": "152-430-8779",
      "address": "447 Markus Stravenue",
      "opening_hours": "08:00",
      "description": "non",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=29.502568311301935",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 29,
      "name": "Mrs. Sherwood Legros",
      "tel": "356-135-0105",
      "address": "5180 Bergnaum Harbor",
      "opening_hours": "08:00",
      "description": "Aut rerum omnis cum et earum dicta tempore. Consequatur ullam et. Adipisci quas non omnis non rem dolores vitae magnam. Vero consequatur nesciunt debitis blanditiis aspernatur similique omnis ullam. Sed quidem voluptates distinctio et veniam soluta in delectus voluptatem.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.527122130563142",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 30,
      "name": "River Graham",
      "tel": "737.607.0422",
      "address": "38732 Stanton Fields",
      "opening_hours": "08:00",
      "description": "Et impedit ut distinctio esse et et nesciunt.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=70.65651404852471",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 31,
      "name": "Thomas Runte Sr.",
      "tel": "1-620-847-5549 x573",
      "address": "595 Metz Landing",
      "opening_hours": "08:00",
      "description": "suscipit aut vitae",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=81.7740970806212",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 32,
      "name": "Orlo Ruecker",
      "tel": "(523) 641-6965",
      "address": "758 Howell Passage",
      "opening_hours": "08:00",
      "description": "Blanditiis eos cum iure. Nisi eveniet voluptas debitis praesentium natus. Dolore nihil quo veritatis hic. Sed pariatur sed quia magni. Vero quidem mollitia. Voluptatem debitis tempore ad repudiandae est.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=93.90244470794167",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 33,
      "name": "Itzel Flatley",
      "tel": "339-678-2339",
      "address": "1042 Armando Village",
      "opening_hours": "08:00",
      "description": "in eveniet error",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=55.17622302573102",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 34,
      "name": "Sherwood Wehner",
      "tel": "(381) 391-4828 x10881",
      "address": "468 Rosendo Hills",
      "opening_hours": "08:00",
      "description": "Quis aut sint in.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=36.605966501132905",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 35,
      "name": "Matilde Herman",
      "tel": "(242) 455-9715",
      "address": "028 Bernadette Divide",
      "opening_hours": "08:00",
      "description": "Velit aspernatur magnam earum non quia perspiciatis magni quod.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=78.19919494372702",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 36,
      "name": "Bobby Stoltenberg",
      "tel": "1-108-653-1241 x5456",
      "address": "447 Weimann Terrace",
      "opening_hours": "08:00",
      "description": "Praesentium non libero occaecati omnis non recusandae quod nihil. At saepe enim facere deleniti quia non mollitia dolorem debitis. Ea maiores facere minima consequatur voluptatem provident consequuntur sed.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=47.87443205040862",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 37,
      "name": "Trace Jones",
      "tel": "296.335.9295",
      "address": "985 Murray Pines",
      "opening_hours": "08:00",
      "description": "Voluptatem unde aut. Modi eveniet voluptas eius explicabo qui. Dolorem unde voluptatem ad cum distinctio dicta sequi corrupti. Ut sit itaque.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=69.97970683242664",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 38,
      "name": "Pansy Wuckert",
      "tel": "280-287-1276",
      "address": "9157 Waelchi Rapids",
      "opening_hours": "08:00",
      "description": "Voluptate possimus recusandae ad facilis nam illum.\nRecusandae nihil ducimus nam sunt tempore facilis recusandae.\nRerum omnis sunt.\nDolorum officiis ex unde est labore et aut.\nIn et nisi temporibus esse aut quidem.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=10.159177399091913",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 39,
      "name": "Enrico Macejkovic IV",
      "tel": "(761) 734-0383 x1219",
      "address": "1671 Jenkins Ways",
      "opening_hours": "08:00",
      "description": "Et distinctio veritatis.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.690192846792204",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 40,
      "name": "Zetta Nader",
      "tel": "1-500-850-2083",
      "address": "202 Terrence Unions",
      "opening_hours": "08:00",
      "description": "perspiciatis",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=21.85288687739002",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 41,
      "name": "Frieda Upton",
      "tel": "1-056-392-6987 x75947",
      "address": "6792 Legros Shoals",
      "opening_hours": "08:00",
      "description": "Provident dignissimos dolorum error totam veniam harum et. Aut culpa perspiciatis rerum. Eos itaque qui deleniti et. Sunt omnis sit sequi. Voluptatem repudiandae doloremque esse cumque error voluptatum laboriosam aut. Ea doloribus voluptatem corrupti inventore consequuntur amet.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=23.173618099478976",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 42,
      "name": "Hillary Schinner",
      "tel": "(577) 298-5681 x30083",
      "address": "66818 Jolie Spur",
      "opening_hours": "08:00",
      "description": "Cumque doloribus blanditiis quo voluptatem similique. Perferendis eos sapiente aperiam modi. Eaque fugiat ipsum. Molestiae quisquam assumenda corporis et dolore. Aut aliquid quisquam reiciendis et. Quod eveniet inventore quia vitae.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=33.66420908156955",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 43,
      "name": "Abdullah Kuhic",
      "tel": "1-841-916-4093 x53240",
      "address": "42919 Torphy Stream",
      "opening_hours": "08:00",
      "description": "Ipsa porro quam. Ipsa numquam rem numquam iure dolorem sapiente. Veritatis inventore nesciunt.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=50.30183558149541",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 44,
      "name": "Thad Hackett",
      "tel": "1-450-146-4354 x62068",
      "address": "6163 Jimmie Station",
      "opening_hours": "08:00",
      "description": "Quis delectus non et tempore iste est et sapiente nisi. Labore blanditiis unde dolores aut voluptatibus. Sapiente sunt aut dolorem et doloribus voluptas aut numquam occaecati. Dolor placeat odit corporis aliquid perferendis illum. Ad exercitationem labore cupiditate nam consequuntur cupiditate omnis sit.\n \rDeserunt qui deserunt ut. Omnis unde repellat eveniet facere facere dignissimos facilis ea. Iure voluptatibus quam pariatur eligendi esse quaerat exercitationem corporis. Excepturi quis ipsa ex optio. Odio minima omnis voluptatem.\n \rDignissimos corrupti voluptatum illo praesentium reprehenderit. Nihil nihil qui illum. Sapiente sit laboriosam odit labore.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=77.56290753215711",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 45,
      "name": "Dedrick Swaniawski",
      "tel": "838-411-5268 x44096",
      "address": "808 Rosenbaum Tunnel",
      "opening_hours": "08:00",
      "description": "Iure dolorum ullam adipisci aperiam necessitatibus dolorem asperiores aut.\nPariatur omnis quia dolorem perspiciatis dolores provident.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=22.099850018082677",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 46,
      "name": "Odie Kassulke",
      "tel": "173.296.9766 x2534",
      "address": "607 Considine Park",
      "opening_hours": "08:00",
      "description": "voluptatem",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=35.68640278416153",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 47,
      "name": "Sydney Weimann",
      "tel": "(848) 976-1166 x2122",
      "address": "88414 Elda Radial",
      "opening_hours": "08:00",
      "description": "Saepe non animi laudantium sed dolorum ea quod tempora. Quia sequi velit enim consequatur. Debitis deserunt velit omnis praesentium sit soluta et expedita explicabo.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=83.64768403248351",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 48,
      "name": "Trisha Ortiz",
      "tel": "1-576-356-5392 x3634",
      "address": "08169 Louie Harbors",
      "opening_hours": "08:00",
      "description": "Repellendus ut esse enim et accusamus aspernatur harum facere nihil.\nDolor vitae consequatur dolor nostrum aut perspiciatis deserunt eos rerum.\nEt culpa illo animi.\nPariatur ullam nisi fuga.\nTempora et autem odio voluptatem possimus sapiente pariatur quo autem.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=58.22600350264268",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 49,
      "name": "Mckenzie Schamberger",
      "tel": "648-475-5933 x339",
      "address": "140 Dino Rapid",
      "opening_hours": "08:00",
      "description": "Rerum et eum asperiores.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=73.38993532909373",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    },
    {
      "id": 50,
      "name": "Floyd Von",
      "tel": "171.118.3744",
      "address": "53191 Alvena Underpass",
      "opening_hours": "08:00",
      "description": "et ullam quis",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=49.53740187806488",
      "viewCounts": 0,
      "createdAt": "2022-07-30T09:11:32.000Z",
      "updatedAt": "2022-07-30T09:11:32.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-07-30T09:11:32.000Z",
        "updatedAt": "2022-07-30T09:11:32.000Z"
      }
    }
  ]
}

export default {
  name: 'AdminRestaurantsTable',
  data() {
    return {
      restaurants: []
    }
  },
  created() {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants
    },
    deleteRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter(
        restaurant => restaurant.id !== restaurantId
      )
    }
  }
}
</script>