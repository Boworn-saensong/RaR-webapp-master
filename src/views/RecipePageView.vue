<script setup>
import { ref, reactive } from 'vue';
import { db, getRecipe } from "@/main.js"

const loaded = ref(false);
const loading = ref(false);
const states = reactive({ search:"" })

async function search() {
    loading.value = ref(true);
    // ดึงข้อมูลมาแล้ว
    console.log(getRecipe(db));
    setTimeout(() => {
        loading.value = false
        loaded.value = true
    }, 2000)
}
</script>

<template>
    <v-card>
        <v-layout>
            <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

            <v-app-bar color="#e3f988" prominent>
                <div class="title">
                    <v-app-bar-title>สูตรอาหาร</v-app-bar-title>
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
                    <v-list-item prepend-icon="mdi-plus" title="เพิ่มสูตรอาหาร" value="addrecipe"
                        to="/addrecipe"></v-list-item>
                    <v-list-item prepend-icon="mdi-format-list-bulleted" title="สูตรอาหารของฉัน" value="myrecipe"
                        to="/myrecipe"></v-list-item>
                </v-list>
                <template v-slot:append>
                    <v-list density="compact" nav>
                        <v-list-item prepend-icon="mdi-keyboard-backspace" title="กลับไปหน้าหลัก" value="home"
                            to="/home"></v-list-item>
                    </v-list>
                </template>
            </v-navigation-drawer>
            <v-main>
                <div class="search">
                    <v-card class="mx-auto" color="grey-lighten-3" max-width="400">
                        <v-card-text>
                            <v-text-field
                                v-model="states.search"
                                density="compact"
                                variant="solo"
                                label="Search templates"
                                append-inner-icon="mdi-magnify"
                                single-line
                                hide-details
                                :loading="loading"
                                @click:append-inner="search"
                            />
                        </v-card-text>
                    </v-card>
                </div>


            </v-main>
        </v-layout>
    </v-card>
</template>

<style scoped>
.title {
    margin-left: 5rem;
}
</style>