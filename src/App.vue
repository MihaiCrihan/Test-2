<script>
  import HelloWorld from "./components/HelloWorld";

  export default {
    name: "App",

    components: {
      HelloWorld
    },

    data: () => ({
      drawer: false,
      admins: [
        ['Management', 'mdi-people_outline'],
        ['Settings', 'mdi-settings'],
      ],
      cruds: [
        ['Create', 'mdi-add'],
        ['Read', 'mdi-insert_drive_file'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
    }),
  };
</script>

<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
<!--      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"-->
      <div>
        <v-text-field
          class="mb-6 text--black"
          style="width: 90%; margin: auto"
          placeholder="Search"
        />
        <v-list>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-group
            nav
            prepend-icon="mdi-pen"
            value="true"
            class="text--black"
            active-class="selected"
            :ripple="false"
          >
            <template v-slot:activator>
              <v-list-item-title>Users</v-list-item-title>
            </template>

            <v-list-group
              no-action
              sub-group
              value="true"
              :ripple="false"
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Admin</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="(admin, i) in admins"
                :key="i"
                link
                :ripple="false"
              >
                <v-list-item-title v-text="admin[0]" />
                <v-list-item-icon>
                  <v-icon v-text="admin[1]" />
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group
              sub-group
              no-action
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Actions</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item
                v-for="(crud, i) in cruds"
                :key="i"
              >
                <v-list-item-title v-text="crud[0]"/>
                <v-list-item-action>
                  <v-icon v-text="crud[1]"/>
                </v-list-item-action>
              </v-list-item>
            </v-list-group>
          </v-list-group>
        </v-list>
      </div>


    </v-navigation-drawer>

    <v-app-bar app color="background">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer />
      <v-switch
        v-model="$vuetify.theme.dark"
        hide-details
        inset
        color="primary"
        class="text--black"
        label="Theme Dark"
      />
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<style scoped>

</style>
