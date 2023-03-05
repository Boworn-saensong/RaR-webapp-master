<script setup>
import { ref } from 'vue';


</script>

<template>
    <v-card>
        <v-layout>
            <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

            <v-app-bar color="#e3f988" prominent>
                <div class="title">
                    <v-app-bar-title>เพิ่มสูตรอาหาร</v-app-bar-title>
                </div>
                <v-spacer></v-spacer>
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
                    </template>
                    <v-list>
                        <v-list-item lines="two" prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
                            title="Jane Smith" subtitle=""></v-list-item>
                        <v-spacer></v-spacer>
                        <v-divider></v-divider>

                        <v-list density="compact" nav>
                            <v-list-item prepend-icon="mdi-logout" title="ออกจากระบบ" value="logout" to="/"></v-list-item>
                        </v-list>
                    </v-list>
                </v-menu>
            </v-app-bar>
            <v-navigation-drawer permanent location="left" color="#e3f988">
                <v-divider></v-divider>
                <v-list density="compact" nav>
                    <v-list-item prepend-icon="mdi-home" title="สูตรอาหาร" value="recipe" to="/recipe"></v-list-item>
                    <v-list-item prepend-icon="mdi-plus" title="เพิ่มสูตรอาหาร" value="addrecipe" to="/addrecipe"></v-list-item>
                    <v-list-item prepend-icon="mdi-format-list-bulleted" title="สูตรอาหารของฉัน"
                        value="myrecipe" to="/myrecipe"></v-list-item>
                </v-list>
                <template v-slot:append>
                    <v-list density="compact" nav>
                        <v-list-item prepend-icon="mdi-keyboard-backspace" title="กลับไปหน้าหลัก" value="home"
                            to="/home"></v-list-item>
                    </v-list>
                </template>
            </v-navigation-drawer>
            <v-main>
                
                
            </v-main>
        </v-layout>
    </v-card>
</template>

<style scoped>
.title {
    margin-left: 5rem;
}
</style>