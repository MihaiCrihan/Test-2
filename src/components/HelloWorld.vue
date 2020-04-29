<script>
  export default {
    name: "HelloWorld",

    data() {
      return {
        items: [
          {
            action: 'local_activity',
            title: 'Attractions',
            items: [
              {title: 'List Item'},
            ],
          },
          {
            action: 'restaurant',
            title: 'Dining',
            active: true,
            items: [
              {title: 'Breakfast & brunch'},
              {title: 'New American'},
              {title: 'Sushi'},
            ],
          },
          {
            action: 'school',
            title: 'Education',
            items: [
              {title: 'List Item'},
            ],
          },
          {
            action: 'directions_run',
            title: 'Family',
            items: [
              {title: 'List Item'},
            ],
          },
          {
            action: 'healing',
            title: 'Health',
            items: [
              {title: 'List Item'},
            ],
          },
          {
            action: 'content_cut',
            title: 'Office',
            items: [
              {title: 'List Item'},
            ],
          },
          {
            action: 'local_offer',
            title: 'Promotions',
            items: [
              {title: 'List Item'},
            ],
          },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
      }
    },
  };
</script>

<template>
  <v-container>
    <div>
      <v-text-field label="primabvara"></v-text-field>

      <v-simple-table>
        <template v-slot:default>
          <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Calories</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-row>
        <div class="col-md-6">
          <v-col>
            <v-row>All the buttons classes</v-row>
            <v-row>
              <div>
                <v-btn color="default">Default</v-btn>
              </div>
              <div class="ml-2">
                <v-btn color="secondary">Secondary</v-btn>
              </div>
              <div class="ml-2">
                <v-btn color="info">Info</v-btn>
              </div>
              <div class="ml-2">
                <v-btn color="success">success</v-btn>
              </div>
              <div class="ml-2">
                <v-btn color="warning">warning</v-btn>
              </div>
              <div class="ml-2">
                <v-btn color="error">error</v-btn>
              </div>
              <div class="ma-5" style="width: 100%">
                <v-divider></v-divider>
              </div>
              <div class="ml-2">
                <v-btn color="primary">primary</v-btn>
              </div>
              <div class="ml-2">
                <v-btn color="filters">filters</v-btn>
              </div>
              <div class="ml-2">
                <v-btn color="hover">hover</v-btn>
              </div>
              <div class="ml-2">
                <v-btn color="selected">selected</v-btn>
              </div>
              <div class="ml-2">
                <v-btn color="preloader">preloader</v-btn>
              </div>
              <div style="width: 100%">
              </div>
              <div class="ml-2">
                <v-btn color="cardColor">cardColor</v-btn>
              </div>
              <div class="ml-2">
                <v-btn color="expandList">expandList</v-btn>
              </div>
              <div class="ml-2">
                <v-btn color="head">head</v-btn>
              </div>
              <div class="ml-2">
                <v-btn color="trNotActiveText">trNotActiveText</v-btn>
              </div>
              <div class="ma-1" style="width: 100%">
              </div>
              <div class="ml-2">
                <v-btn color="trNotActiveBackground">trNotActiveBackground</v-btn>
              </div>
            </v-row>
          </v-col>

          <v-col>
            <v-row>Button sizes</v-row>
            <v-row class="mb-12">
              <div class="mt-3">
                <v-btn color="info" x-small>Primary</v-btn>
              </div>
              <div class="ml-2 mt-3">
                <v-btn color="info" small>Primary</v-btn>
              </div>
              <div class="ml-2 mt-2">
                <v-btn color="info">Primary</v-btn>
              </div>
              <div class="ml-2 mt-1">
                <v-btn color="info" large>Large</v-btn>
              </div>
              <div class="ml-2">
                <v-btn color="info" x-large>Primary</v-btn>
              </div>
            </v-row>
          </v-col>

        </div>
        <div>
          <v-col>
            <div>
              <v-btn color="success">
                <v-icon size="16" class="mr-2">
                  mdi-pencil
                </v-icon>
                test
              </v-btn>
            </div>
          </v-col>
        </div>
      </v-row>

      <v-card>
        <div style="padding: 50px 0" class="card">aaaaa goriu</div>
      </v-card>
    </div>

    <v-row>
      <div style="width: 100%;height: 30px">
        12313
        <v-divider/>
      </div>
    </v-row>

    <v-row>
      <form>
        <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          :counter="10"
          label="Name"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
          color="primary"
        ></v-text-field>
        <v-text-field
          label="Outlined"
          outlined
        />
        <v-select
          v-model="select"
          :items="items"
          :error-messages="selectErrors"
          label="Item"
          required
          @change="$v.select.$touch()"
          @blur="$v.select.$touch()"
        ></v-select>
        <v-checkbox
          v-model="checkbox"
          :error-messages="checkboxErrors"
          label="Do you agree?"
          required
          @change="$v.checkbox.$touch()"
          @blur="$v.checkbox.$touch()"
        ></v-checkbox>

        <v-btn class="mr-4" @click="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </form>
      <v-container fluid>
        <v-row class="dark--text">
          <v-col cols="6">on</v-col>
          <v-col cols="6">off</v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-switch value input-value="true"></v-switch>
          </v-col>
          <v-col cols="6">
            <v-switch></v-switch>
          </v-col>
        </v-row>
        <v-row class="dark--text">
          <v-col cols="6">on disabled</v-col>
          <v-col cols="6">off disabled</v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-switch value input-value="true" disabled></v-switch>
          </v-col>
          <v-col cols="6">
            <v-switch disabled></v-switch>
          </v-col>
        </v-row>
        <v-row class="dark--text">
          <v-col cols="6">on loading</v-col>
          <v-col cols="6">off loading</v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-switch loading="warning" value input-value="true"></v-switch>
          </v-col>
          <v-col cols="6">
            <v-switch loading="warning"></v-switch>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
    <div>
      <v-card>
        <v-card style="width: 100px; height: 100px; text-align: center; top: -30px; left: 30px; position: relative"
                class="success">
          <v-icon color="white" style="top: 50%; transform: translate(0, -50%)">
            mdi-cached
          </v-icon>
        </v-card>
        <div class="pa-5">
          <v-text-field></v-text-field>
          <v-text-field></v-text-field>
        </div>
        <v-row>
          <v-btn color="success" class="ml-auto mr-10 mb-3">LOG IN</v-btn>
        </v-row>
      </v-card>
    </div>
  </v-container>
</template>

<style scoped>
  .card {
    background: var(--v-secondary-base);
  }
</style>
