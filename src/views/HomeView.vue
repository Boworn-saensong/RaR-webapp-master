<script setup>
import { Icon } from '@iconify/vue';
import { useRouter } from "vue-router";
const router = useRouter();

function gotorecipe(){router.push("recipe");} 
function gotorestaurant(){router.push("restaurant");} 

</script>

<template>
    <v-app>
        <div class="cardbg">
            <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
                <div class="title">
                    <h2>เลือกสิ่งที่คุณสนใจ</h2>
                </div>
                <v-btn block class="mb-8" width="400" height="100" @click="gotorecipe()">
                    <div class="icon1">
                        <Icon icon="ep:food" width="50" height="50" />
                    </div>
                    <div>
                        <h3>สูตรอาหาร</h3>
                    </div>
                </v-btn>

                <v-btn block class="mb-8" width="400" height="100" @click="gotorestaurant()">
                    <div class="icon2">
                        <Icon icon="medical-icon:restaurant" width="50" height="50" />
                    </div>
                    <div>
                        <h3>ร้านอาหาร</h3> 
                    </div>
                </v-btn>
            </v-card>
        </div>
    </v-app>
</template>

<style scoped>
.title{
    text-align: center;
    margin-bottom: 2rem;
}
.icon1 {
    margin-right: 1rem;
}

.icon2 {
    margin-right: 1rem;
}

.cardbg {
    padding: 9rem;
}
</style>