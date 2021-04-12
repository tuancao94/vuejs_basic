Vue.component('product',{
    props:{
        premium: {
            type:Boolean,
            required:true
        }
    },
    template:`
    <div class = "product">
        <div class = "product-images">
            <img v-bind:src="image">
        </div>
        <div class = "product-info">
            <h1>{{title}}</h1>
            <!-- <p v-show="inStock">In Socks</p> -->
            <p v-if="inStock">In Socks</p>
            <!-- <p v-if="inStock < 10 && inStock > 0">All Socks</p> -->
            <p v-else>Out of Socks</p>
            <p>User the Shopping:{{shopping}}</p>
            <ul>
                <li v-for="detail in details">{{detail}}</li>
            </ul>
            <div class="color-box" v-for="(variant,index) in variants" 
                :key = "variant.variantId" 
                :style="{backgroundColor:variant.variantColor}"
                @mouseover="updateProduct(index)">
            </div>

            <button v-on:click="addtoCart"
            :disabled="!inStock"
            :class = "{disabledButton: !inStock}">Them Vao Gio Hang</button>
            <div class="cart">
                <p>Cart({{cart}})</p>
            </div>
        </div>
    </div>
    `,
    data(){
        return
        {
            brand: 'Vue mastery',
            product: 'Socks',
            selectedVariant: 0,
            details: ["80% cotton", "20% polime", "Aaaaaaaaaaaaaaaaaaa"],
            variants:[
                {
                    variantId:1234,
                    variantColor: "green",
                    variantQuantity: 10,
                    variantImage:'data:image/jpeg;base64,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'
                },
                {
                    variantId:3456,
                    variantColor: "red",
                    variantQuantity: 0,
                    variantImage:'https://product.hstatic.net/1000042622/product/ta187-30_0fb31e6a2a03451884097139f97c4d4b_master.jpg'
                }
            ],
            cart: 0,
        }
    },
    methods:{
        addtoCart: function(){
            this.cart+=1
        },
        updateProduct(index){
            this.selectedVariant=index
            console.log(index)
        }
    },
    computed:{
        title(){
            return this.brand + ' ' +this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantImage
        },
        shopping(){
            if(this.premium)
            {
                return Free
            }
            return 2.00
        }
    }
})

var app = new Vue({
    el: '#app'
    data:{
        premium:false
    }
})