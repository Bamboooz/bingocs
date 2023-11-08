const submitButton = document.querySelector(".submit_btn");
const bingoButton = document.querySelectorAll(".bingo_btn");
const rulesBox = document.querySelector(".rules");
let state = 0;

submitButton.addEventListener("click", function() {
    submitButton.style.display = "none";
    rulesBox.style.display = "none";
    state = 1;
});

const bingoElementsArray = ["bambino piszczy jak baba", "pawla wypierdala z gry", "kuba próbuje kogoś nożować",
    "olo drze pizde na kogoś", "giekon dostaje bana", "mati ma wylew",
    "mati dostaje kicka", "zombiaczek mniej niż 20 killi", "nowy dzwiek do soundborda", "olo spami bindami na glosowym",
    "denerwujący rusek na głosowym", "kidos na głosowym", "teammate (random) debil", "mama wbija komus do pokoju",
    "ace", "smięszna ilosc damage", "bambina wołają starzy", "awpidar w druzynie przeciwnej",
    "mati 1 miejsce w tabeli po 1 polowie gry", "mati pierdoli glupoty", "druzyna przeciwna to boty", "Bambino musi być cicho",
    "krzysiu zwiększa gaina na maxa", "Przeciwnik wychodzi bo przegrywa", "Random teammate umie angielski",
    "Cała drużyna ma wylew", "ktos poza pawlem narzeka na lagi", "bitwa o miejsce w tabeli",
    "ktoś wspomina skibidi toilet", "mati nie umie w angielski", "krzychu scopuje z 0.5 metra", "granat pago zabija kogoś",
    "randomowy n word", "ktos krzyczy kys", "leci GYATT", "olo ragequit", "prezciwnicy to totalne spoceńce"];

let usedBingoElementsArray = [];

bingoButton.forEach(bingoBtn => {
    while (true) {
        const selectedBingoTextToAdd = bingoElementsArray[Math.floor(Math.random()*bingoElementsArray.length)];
        if (!usedBingoElementsArray.includes(selectedBingoTextToAdd)) {
            bingoBtn.textContent = selectedBingoTextToAdd;
            usedBingoElementsArray.push(selectedBingoTextToAdd)
            break;
        }
    }

    bingoBtn.addEventListener("click", function() {
        if (state === 0) {
            const textBefore = bingoBtn.textContent;

            while (true) {
                const selectedBingoTextToAdd = bingoElementsArray[Math.floor(Math.random()*bingoElementsArray.length)];

                if (!usedBingoElementsArray.includes(selectedBingoTextToAdd)) {
                    bingoBtn.textContent = selectedBingoTextToAdd;
                    usedBingoElementsArray.push(selectedBingoTextToAdd)
                    break;
                }
            }

            usedBingoElementsArray = usedBingoElementsArray.filter(e => e !== textBefore)
        } else {
            if (bingoBtn.style.backgroundColor === 'rgba(255, 0, 0, 0.5)') {
                bingoBtn.style.backgroundColor = '#f0f0f0';

                bingoBtn.addEventListener("mouseover", function () {
                    bingoBtn.style.backgroundColor = '#dedcdc';
                });

                bingoBtn.addEventListener("mouseout", function () {
                    bingoBtn.style.backgroundColor = '#f0f0f0';
                });
            } else {
                bingoBtn.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';

                bingoBtn.addEventListener("mouseover", function () {
                    bingoBtn.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
                });

                bingoBtn.addEventListener("mouseout", function () {
                    bingoBtn.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
                });
            }
        }
    });
 });
 