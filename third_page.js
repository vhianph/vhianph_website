function showThirdPage() {
    document.querySelector(".secondPage").style.display = "none";
    document.querySelector(".thirdPage").style.display = "block";
}

const categories = {
    1: 
    {
        text: `
            Bạn có biết chúng tớ đã quen nhau từ khi nào và như thế nào không? Chúng tớ đã gặp và quen nhau khi học chung lớp 10, lúc đấy tớ là ông thần Vật Lý của lớp còn Thị Bông thì hơi mít đặc (bà chúa ghét Vật Lý - kẻ thù của mọi loại công thức).<br>
            Và rồi có một người làm cầu nối cho chúng tớ, ĐÓ CHÍNH LÀ NGƯỜI YÊU CŨ CỦA TỚ :><br>
            🐧 ẢO MA CANADA OBAMA CHƯA ??????🐧<br>
            Tớ với Bông đã trở thành bạn bè, cùng nhau học hành, cùng nhau đi chơi, cùng nhau chia sẻ mọi thứ trong cuộc sống. Lúc đó, chúng tớ thân nhau lúc nào cũng chả biết @@
        `,
        image: "image_and_gif/cat1-1.JPG"
    },

    2:
    {

    },

    3:
    {

    },

    4:
    {

    },

};

function showCategory(cat) {
    const main = document.getElementById('mainPanel');
    main.innerHTML = `
        <div class="category-block">
            <p>${categories[cat].text}</p>
            <img src="${categories[cat].image}" class="thirdPage_thumbnail" alt="Category ${cat} image" onclick="showFullImage('${categories[cat].image}')">
        </div>
    `;
}