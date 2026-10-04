var imgMeals = document.getElementById("imgMeal");
var statusMeals = document.getElementById("status");
var types = document.getElementById("type");
var nameOfMeals = document.getElementById("nameOfMeal");
var descriptions = document.getElementById("description");
var warnings = document.getElementById("warning");
var ingFirsts = document.getElementById("ingFirst");
var ingSeconds = document.getElementById("ingSecond");
var ingThirds = document.getElementById("ingThird");
var ingForths = document.getElementById("ingForth");
var ingFifths = document.getElementById("ingFifth");
var ingSixths = document.getElementById("ingSixth");
var ingSevenths = document.getElementById("ingSeventh");
var ingEighths = document.getElementById("ingEighth");
var ingNineths = document.getElementById("ingNineth");
var instFirsts = document.getElementById("instFirst");
var instSeconds = document.getElementById("instSecond");
var instThirds = document.getElementById("instThird");
var instForths = document.getElementById("instForth");
var instFifths = document.getElementById("instFifth");
var instSixths = document.getElementById("instSixth");
var caloriess = document.getElementById("calories");
var proteins = document.getElementById("protein");
var carbs = document.getElementById("carb");
var fats = document.getElementById("fat");
var fibers = document.getElementById("fiber");
var sodiums = document.getElementById("sodium");
var firstTips = document.getElementById("firstTip");
var secondTips = document.getElementById("secondTip");
var thirdTips = document.getElementById("thirdTip");
var forthTips = document.getElementById("forthTip");
var generateBtns = document.getElementById("generateBtn");

var meal = [
  {
    imgMeal: `<img
                    src="./img/first.jpg"
                    class="card-img-top"
                    alt="Vegetable-Curry"
                  />
                  <div
                    class="position-absolute top-0 start-0 m-4 bg-white rounded-5 p-2 d-flex align-items-center"
                  >
                    <i class="fas fa-star fa-sm text-gold ms-2"></i>
                    <span class="fw-semibold fs-14 text-dark-gray px-2"
                      >4.6</span
                    >
                    <span class="fw-normal fs-12 text-light-gray2"
                      >(289 reviews)</span
                    >
                  </div>
                  <div class="container position-absolute bottom-0 mb-3">
                    <div
                      class="row w-100 m-auto bg-white py-2 py-lg-3  rounded-4 text-center"
                    >
                      <div class="col-4 pe-3 pe-lg-0">
                        <i class="fas fa-clock text-orange"></i>
                        <p class="fw-normal fs-12 text-light-gray">Prep Time</p>
                        <p class="fw-bold fs-14 text-dark-gray">20 min</p>
                      </div>
                      <div class="col-4">
                        <i class="fas fa-fire-burner text-red2"></i>
                        <p class="fw-normal fs-12 text-light-gray">Cook Time</p>
                        <p class="fw-bold fs-14 text-dark-gray">30 min</p>
                      </div>
                      <div class="col-4 ps-3 ps-lg-0">
                        <i class="fas fa-users text-primary"></i>
                        <p class="fw-normal fs-12 text-light-gray">Servings</p>
                        <p class="fw-bold fs-14 text-dark-gray">4 people</p>
                      </div>
                    </div>
                  </div>`,
    statusMeal: "Intermediate",
    type: "Italian",
    nameOfMeal: "Lasagna Bolognese",
    description: "Layered Italian pasta with rich meat sauce and béchamel",
    ingFirst: "12 lasagna sheet",
    ingSecond: "500g ground beef",
    ingThird: "400g canned tomatoes",
    ingForth: "1 onion, diced",
    ingFifth: "2 carrots, diced",
    ingSixth: "500ml béchamel sauce",
    ingSeventh: "200g mozzarella, grated",
    ingEighth: "100g parmesan cheese",
    ingNineth: "Fresh basil",
    instFirst:
      "Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.",
    instSecond:
      "Cook lasagna sheets according to package directions. Drain and set aside.",
    instThird: "Preheat oven to 180°C (350°F).",
    instForth:
      "In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.",
    instFifth:
      "Top final layer with béchamel, mozzarella, and parmesan cheese.",
    instSixth:
      "Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving.",
    calories: "680 kal",
    protein: "42g",
    carb: "58g",
    fat: "28g",
    fiber: "6g",
    sodium: "920mg",
    firstTip: "Make bolognese sauce a day ahead for better flavor",
    secondTip: "Don't skip the resting time after baking",
    thirdTip: "Use fresh pasta sheets for best texture",
    forthTip: "Freeze leftovers in individual portions",
  },
  {
    imgMeal: `<img
                    src="./img/second.avif"
                    class="card-img-top"
                    alt="Vegetable-Curry"
                  />
                  <div
                    class="position-absolute top-0 start-0 m-4 bg-white rounded-5 p-2 d-flex align-items-center"
                  >
                    <i class="fas fa-star fa-sm text-gold ms-2"></i>
                    <span class="fw-semibold fs-14 text-dark-gray px-2"
                      >4.6</span
                    >
                    <span class="fw-normal fs-12 text-light-gray2"
                      >(289 reviews)</span
                    >
                  </div>
                  <div class="container position-absolute bottom-0 mb-3">
                    <div
                      class="row w-100 m-auto bg-white py-2 py-lg-3  rounded-4 text-center"
                    >
                      <div class="col-4 pe-3 pe-lg-0">
                        <i class="fas fa-clock text-orange"></i>
                        <p class="fw-normal fs-12 text-light-gray">Prep Time</p>
                        <p class="fw-bold fs-14 text-dark-gray">20 min</p>
                      </div>
                      <div class="col-4">
                        <i class="fas fa-fire-burner text-red2"></i>
                        <p class="fw-normal fs-12 text-light-gray">Cook Time</p>
                        <p class="fw-bold fs-14 text-dark-gray">30 min</p>
                      </div>
                      <div class="col-4 ps-3 ps-lg-0">
                        <i class="fas fa-users text-primary"></i>
                        <p class="fw-normal fs-12 text-light-gray">Servings</p>
                        <p class="fw-bold fs-14 text-dark-gray">4 people</p>
                      </div>
                    </div>
                  </div>`,
    statusMeal: "Intermediate",
    type: "Italian",
    nameOfMeal: "Margherita Pizza",
    description: "Classic Italian pizza with fresh mozzarella and basil",
    ingFirst: "300g pizza dough",
    ingSecond: "200g crushed tomatoes",
    ingThird: "250g fresh mozzarella",
    ingForth: "Fresh basil leaves",
    ingFifth: "2 tablespoons olive oil",
    ingSixth: "2 cloves garlic, minced",
    ingSeventh: "Salt and pepper to taste",
    ingEighth: "Parmesan cheese for topping",
    ingNineth: "",
    instFirst: "Let pizza dough come to room temperature and rest for 1 hour.",
    instSecond: "Preheat oven to maximum temperature (usually 250°C/480°F).",
    instThird:
      "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
    instForth: "Roll out dough on a floured surface to desired thickness.",
    instFifth:
      "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
    instSixth:
      "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan.",
    calories: "580 kal",
    protein: "22g",
    carb: "68g",
    fat: "22g",
    fiber: "4g",
    sodium: "920mg",
    firstTip: "Use a pizza stone for crispier crust",
    secondTip: "Don't overload with toppings - less is more",
    thirdTip: "Add basil after baking to keep it fresh",
    forthTip: "Let dough rest properly for best texture",
  },
  {
    imgMeal: `<img
                    src="./img/third.avif"
                    class="card-img-top"
                    alt="Vegetable-Curry"
                  />
                  <div
                    class="position-absolute top-0 start-0 m-4 bg-white rounded-5 p-2 d-flex align-items-center"
                  >
                    <i class="fas fa-star fa-sm text-gold ms-2"></i>
                    <span class="fw-semibold fs-14 text-dark-gray px-2"
                      >4.6</span
                    >
                    <span class="fw-normal fs-12 text-light-gray2"
                      >(289 reviews)</span
                    >
                  </div>
                  <div class="container position-absolute bottom-0 mb-3">
                    <div
                      class="row w-100 m-auto bg-white py-2 py-lg-3  rounded-4 text-center"
                    >
                      <div class="col-4 pe-3 pe-lg-0">
                        <i class="fas fa-clock text-orange"></i>
                        <p class="fw-normal fs-12 text-light-gray">Prep Time</p>
                        <p class="fw-bold fs-14 text-dark-gray">20 min</p>
                      </div>
                      <div class="col-4">
                        <i class="fas fa-fire-burner text-red2"></i>
                        <p class="fw-normal fs-12 text-light-gray">Cook Time</p>
                        <p class="fw-bold fs-14 text-dark-gray">30 min</p>
                      </div>
                      <div class="col-4 ps-3 ps-lg-0">
                        <i class="fas fa-users text-primary"></i>
                        <p class="fw-normal fs-12 text-light-gray">Servings</p>
                        <p class="fw-bold fs-14 text-dark-gray">4 people</p>
                      </div>
                    </div>
                  </div>`,
    statusMeal: "Easy",
    type: "Seafood",
    nameOfMeal: "Honey Garlic Salmon",
    description: "Pan-seared salmon with a sweet and savory glaze",
    ingFirst: "2 salmon fillets (6oz each)",
    ingSecond: "3 tablespoons honey",
    ingThird: "2 tablespoons soy sauce",
    ingForth: "4 cloves garlic, minced",
    ingFifth: "1 tablespoon olive oil",
    ingSixth: "1 teaspoon fresh ginger, grated",
    ingSeventh: "Sesame seeds for garnish",
    ingEighth: "Green onions, sliced",
    ingNineth: "",
    instFirst: "Pat salmon fillets dry with paper towels. Season with salt and pepper.",
    instSecond: "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
    instThird:
      "Heat olive oil in a large skillet over medium-high heat.",
    instForth: "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
    instFifth:
      "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
    instSixth:
      "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice.",
    calories: "380 kal",
    protein: "35g",
    carb: "28g",
    fat: "14g",
    fiber: "0g",
    sodium: "720mg",
    firstTip: "Don't overcook salmon - it should be slightly pink in the center",
    secondTip: "Use wild-caught salmon for best flavor and nutrition",
    thirdTip: "Let the sauce caramelize slightly for deeper flavor",
    forthTip: "Pair with steamed broccoli or asparagus for a complete meal",
  },
  {
    imgMeal: `<img
                    src="./img/forth.avif"
                    class="card-img-top"
                    alt="Vegetable-Curry"
                  />
                  <div
                    class="position-absolute top-0 start-0 m-4 bg-white rounded-5 p-2 d-flex align-items-center"
                  >
                    <i class="fas fa-star fa-sm text-gold ms-2"></i>
                    <span class="fw-semibold fs-14 text-dark-gray px-2"
                      >4.6</span
                    >
                    <span class="fw-normal fs-12 text-light-gray2"
                      >(289 reviews)</span
                    >
                  </div>
                  <div class="container position-absolute bottom-0 mb-3">
                    <div
                      class="row w-100 m-auto bg-white py-2 py-lg-3  rounded-4 text-center"
                    >
                      <div class="col-4 pe-3 pe-lg-0">
                        <i class="fas fa-clock text-orange"></i>
                        <p class="fw-normal fs-12 text-light-gray">Prep Time</p>
                        <p class="fw-bold fs-14 text-dark-gray">20 min</p>
                      </div>
                      <div class="col-4">
                        <i class="fas fa-fire-burner text-red2"></i>
                        <p class="fw-normal fs-12 text-light-gray">Cook Time</p>
                        <p class="fw-bold fs-14 text-dark-gray">30 min</p>
                      </div>
                      <div class="col-4 ps-3 ps-lg-0">
                        <i class="fas fa-users text-primary"></i>
                        <p class="fw-normal fs-12 text-light-gray">Servings</p>
                        <p class="fw-bold fs-14 text-dark-gray">4 people</p>
                      </div>
                    </div>
                  </div>`,
    statusMeal: "Easy",
    type: "Asian",
    nameOfMeal: "Teriyaki Chicken Bowl",
    description: "Sweet and savory chicken over rice with vegetables",
    ingFirst: "400g chicken thighs, sliced",
    ingSecond: "1/2 cup teriyaki sauce",
    ingThird: "2 cups cooked rice",
    ingForth: "1 broccoli head, florets",
    ingFifth: "1 carrot, julienned",
    ingSixth: "Sesame seeds",
    ingSeventh: "Green onions, sliced",
    ingEighth: "1 tablespoon sesame oil",
    ingNineth: "",
    instFirst: "Heat sesame oil in a pan. Cook chicken until browned on all sides.",
    instSecond: "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
    instThird:
      "Meanwhile, steam broccoli and carrots until tender-crisp.",
    instForth: "Divide rice between bowls.",
    instFifth:
      "Top with teriyaki chicken and steamed vegetables.",
    instSixth:
      "Garnish with sesame seeds and green onions. Serve hot.",
    calories: "540 kal",
    protein: "42g",
    carb: "58g",
    fat: "14g",
    fiber: "4g",
    sodium: "1240mg",
    firstTip: "Use chicken thighs for juicier meat",
    secondTip: "Make homemade teriyaki sauce for better flavor control",
    thirdTip: "Add edamame for extra protein",
    forthTip: "Meal prep by cooking rice and chicken ahead",
  },
  {
    imgMeal: `<img
                    src="./img/fifth.jpg"
                    class="card-img-top"
                    alt="Vegetable-Curry"
                  />
                  <div
                    class="position-absolute top-0 start-0 m-4 bg-white rounded-5 p-2 d-flex align-items-center"
                  >
                    <i class="fas fa-star fa-sm text-gold ms-2"></i>
                    <span class="fw-semibold fs-14 text-dark-gray px-2"
                      >4.6</span
                    >
                    <span class="fw-normal fs-12 text-light-gray2"
                      >(289 reviews)</span
                    >
                  </div>
                  <div class="container position-absolute bottom-0 mb-3">
                    <div
                      class="row w-100 m-auto bg-white py-2 py-lg-3  rounded-4 text-center"
                    >
                      <div class="col-4 pe-3 pe-lg-0">
                        <i class="fas fa-clock text-orange"></i>
                        <p class="fw-normal fs-12 text-light-gray">Prep Time</p>
                        <p class="fw-bold fs-14 text-dark-gray">20 min</p>
                      </div>
                      <div class="col-4">
                        <i class="fas fa-fire-burner text-red2"></i>
                        <p class="fw-normal fs-12 text-light-gray">Cook Time</p>
                        <p class="fw-bold fs-14 text-dark-gray">30 min</p>
                      </div>
                      <div class="col-4 ps-3 ps-lg-0">
                        <i class="fas fa-users text-primary"></i>
                        <p class="fw-normal fs-12 text-light-gray">Servings</p>
                        <p class="fw-bold fs-14 text-dark-gray">4 people</p>
                      </div>
                    </div>
                  </div>`,
    statusMeal: "Easy",
    type: "Seafood",
    nameOfMeal: "Shrimp Scampi",
    description: "Garlicky shrimp in white wine butter sauce",
    ingFirst: "400g large shrimp, peeled",
    ingSecond: "300g linguine pasta",
    ingThird: "6 cloves garlic, minced",
    ingForth: "1/2 cup white wine",
    ingFifth: "4 tablespoons butter",
    ingSixth: "2 tablespoons olive oil",
    ingSeventh: "Fresh parsley, chopped",
    ingEighth: "Lemon juice and zest",
    ingNineth: "Red pepper flakes",
    instFirst: "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
    instSecond: "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
    instThird:
      "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
    instForth: "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
    instFifth:
      "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
    instSixth:
      "Garnish with parsley, lemon zest, and serve immediately.",
    calories: "520 kal",
    protein: "36g",
    carb: "54g",
    fat: "18g",
    fiber: "3g",
    sodium: "620mg",
    firstTip: "Don't overcook shrimp - they cook very quickly",
    secondTip: "Use good quality white wine for best flavor",
    thirdTip: "Toss pasta in sauce for maximum flavor absorption",
    forthTip: "Add extra lemon for bright, fresh taste",
  },
  {
    imgMeal: `<img
                    src="./img/sixth.avif"
                    class="card-img-top"
                    alt="Vegetable-Curry"
                  />
                  <div
                    class="position-absolute top-0 start-0 m-4 bg-white rounded-5 p-2 d-flex align-items-center"
                  >
                    <i class="fas fa-star fa-sm text-gold ms-2"></i>
                    <span class="fw-semibold fs-14 text-dark-gray px-2"
                      >4.6</span
                    >
                    <span class="fw-normal fs-12 text-light-gray2"
                      >(289 reviews)</span
                    >
                  </div>
                  <div class="container position-absolute bottom-0 mb-3">
                    <div
                      class="row w-100 m-auto bg-white py-2 py-lg-3  rounded-4 text-center"
                    >
                      <div class="col-4 pe-3 pe-lg-0">
                        <i class="fas fa-clock text-orange"></i>
                        <p class="fw-normal fs-12 text-light-gray">Prep Time</p>
                        <p class="fw-bold fs-14 text-dark-gray">20 min</p>
                      </div>
                      <div class="col-4">
                        <i class="fas fa-fire-burner text-red2"></i>
                        <p class="fw-normal fs-12 text-light-gray">Cook Time</p>
                        <p class="fw-bold fs-14 text-dark-gray">30 min</p>
                      </div>
                      <div class="col-4 ps-3 ps-lg-0">
                        <i class="fas fa-users text-primary"></i>
                        <p class="fw-normal fs-12 text-light-gray">Servings</p>
                        <p class="fw-bold fs-14 text-dark-gray">4 people</p>
                      </div>
                    </div>
                  </div>`,
    statusMeal: "Easy",
    type: "Asian",
    nameOfMeal: "Chicken Stir-Fry",
    description: "Quick and healthy stir-fry with colorful vegetables",
    ingFirst: "500g chicken breast, sliced",
    ingSecond: "2 bell peppers, sliced",
    ingThird: "1 broccoli head, florets",
    ingForth: "2 carrots, julienned",
    ingFifth: "3 tablespoons soy sauce",
    ingSixth: "2 tablespoons oyster sauce",
    ingSeventh: "1 tablespoon sesame oil",
    ingEighth: "2 cloves garlic, minced",
    ingNineth: "Fresh ginger, grated",
    instFirst: "Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
    instSecond: "Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
    instThird:
      "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
    instForth: "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
    instFifth:
      "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
    instSixth:
      "Serve immediately over steamed rice or noodles.",
    calories: "320 kal",
    protein: "34g",
    carb: "18g",
    fat: "12g",
    fiber: "6g",
    sodium: "840mg",
    firstTip: "Cut all ingredients before starting to cook",
    secondTip: "Keep heat high for authentic stir-fry texture",
    thirdTip: "Don't overcrowd the wok or vegetables will steam",
    forthTip: "Add cashews or peanuts for extra crunch",
  },
  {
    imgMeal: `<img
                    src="./img/seventh.jpg"
                    class="card-img-top"
                    alt="Vegetable-Curry"
                  />
                  <div
                    class="position-absolute top-0 start-0 m-4 bg-white rounded-5 p-2 d-flex align-items-center"
                  >
                    <i class="fas fa-star fa-sm text-gold ms-2"></i>
                    <span class="fw-semibold fs-14 text-dark-gray px-2"
                      >4.6</span
                    >
                    <span class="fw-normal fs-12 text-light-gray2"
                      >(289 reviews)</span
                    >
                  </div>
                  <div class="container position-absolute bottom-0 mb-3">
                    <div
                      class="row w-100 m-auto bg-white py-2 py-lg-3  rounded-4 text-center"
                    >
                      <div class="col-4 pe-3 pe-lg-0">
                        <i class="fas fa-clock text-orange"></i>
                        <p class="fw-normal fs-12 text-light-gray">Prep Time</p>
                        <p class="fw-bold fs-14 text-dark-gray">20 min</p>
                      </div>
                      <div class="col-4">
                        <i class="fas fa-fire-burner text-red2"></i>
                        <p class="fw-normal fs-12 text-light-gray">Cook Time</p>
                        <p class="fw-bold fs-14 text-dark-gray">30 min</p>
                      </div>
                      <div class="col-4 ps-3 ps-lg-0">
                        <i class="fas fa-users text-primary"></i>
                        <p class="fw-normal fs-12 text-light-gray">Servings</p>
                        <p class="fw-bold fs-14 text-dark-gray">4 people</p>
                      </div>
                    </div>
                  </div>`,
    statusMeal: "Intermediate",
    type: "Mediterranean",
    nameOfMeal: "Greek Moussaka",
    description: "Traditional layered eggplant casserole with lamb",
    ingFirst: "3 large eggplants, sliced",
    ingSecond: "500g ground lamb",
    ingThird: "400g canned tomatoes",
    ingForth: "1 onion, diced",
    ingFifth: "3 cloves garlic, minced",
    ingSixth: "500ml béchamel sauce",
    ingSeventh: "100g parmesan cheese",
    ingEighth: "Cinnamon and oregano",
    ingNineth: "Olive oil",
    instFirst: "Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
    instSecond: "Brush eggplant slices with olive oil, grill or bake until softened.",
    instThird:
      "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
    instForth: "Preheat oven to 180°C (350°F).",
    instFifth:
      "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
    instSixth:
      "Bake for 45 minutes until golden. Let rest 15 minutes before serving.",
    calories: "580 kal",
    protein: "36g",
    carb: "32g",
    fat: "32g",
    fiber: "8g",
    sodium: "820mg",
    firstTip: "Salt eggplant to remove bitterness",
    secondTip: "Don't skip the resting time - it helps set the layers",
    thirdTip: "Use ground beef if lamb is unavailable",
    forthTip: "Make ahead and reheat for easier serving",
  },
  {
    imgMeal: `<img
                    src="./img/eighth.jpg"
                    class="card-img-top"
                    alt="Vegetable-Curry"
                  />
                  <div
                    class="position-absolute top-0 start-0 m-4 bg-white rounded-5 p-2 d-flex align-items-center"
                  >
                    <i class="fas fa-star fa-sm text-gold ms-2"></i>
                    <span class="fw-semibold fs-14 text-dark-gray px-2"
                      >4.6</span
                    >
                    <span class="fw-normal fs-12 text-light-gray2"
                      >(289 reviews)</span
                    >
                  </div>
                  <div class="container position-absolute bottom-0 mb-3">
                    <div
                      class="row w-100 m-auto bg-white py-2 py-lg-3  rounded-4 text-center"
                    >
                      <div class="col-4 pe-3 pe-lg-0">
                        <i class="fas fa-clock text-orange"></i>
                        <p class="fw-normal fs-12 text-light-gray">Prep Time</p>
                        <p class="fw-bold fs-14 text-dark-gray">20 min</p>
                      </div>
                      <div class="col-4">
                        <i class="fas fa-fire-burner text-red2"></i>
                        <p class="fw-normal fs-12 text-light-gray">Cook Time</p>
                        <p class="fw-bold fs-14 text-dark-gray">30 min</p>
                      </div>
                      <div class="col-4 ps-3 ps-lg-0">
                        <i class="fas fa-users text-primary"></i>
                        <p class="fw-normal fs-12 text-light-gray">Servings</p>
                        <p class="fw-bold fs-14 text-dark-gray">4 people</p>
                      </div>
                    </div>
                  </div>`,
    statusMeal: "Intermediate",
    type: "Asian",
    nameOfMeal: "Chicken Tikka Masala",
    description: "Rich and creamy Indian curry with tender chicken pieces",
    ingFirst: "600g chicken breast, cubed",
    ingSecond: "1 cup plain yogurt",
    ingThird: "2 tablespoons tikka masala paste",
    ingForth: "400ml coconut cream",
    ingFifth: "1 onion, diced",
    ingSixth: "4 cloves garlic, minced",
    ingSeventh: "2 tablespoons ginger, grated",
    ingEighth: "400g canned tomatoes",
    ingNineth: "Fresh cilantro for garnish",
    instFirst: "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
    instSecond: "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
    instThird:
      "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
    instForth: "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes",
    instFifth:
      "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
    instSixth:
      "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice.",
    calories: "450 kal",
    protein: "38g",
    carb: "24g",
    fat: "22g",
    fiber: "4g",
    sodium: "760mg",
    firstTip: "Marinate chicken overnight for deeper flavor",
    secondTip: "Use full-fat coconut cream for richest sauce",
    thirdTip: "Adjust spice level by varying the tikka paste amount",
    forthTip: "Serve with naan bread and basmati rice",
  },
  {
    imgMeal: `<img
                    src="./img/eighth.jpg"
                    class="card-img-top"
                    alt="Vegetable-Curry"
                  />
                  <div
                    class="position-absolute top-0 start-0 m-4 bg-white rounded-5 p-2 d-flex align-items-center"
                  >
                    <i class="fas fa-star fa-sm text-gold ms-2"></i>
                    <span class="fw-semibold fs-14 text-dark-gray px-2"
                      >4.6</span
                    >
                    <span class="fw-normal fs-12 text-light-gray2"
                      >(289 reviews)</span
                    >
                  </div>
                  <div class="container position-absolute bottom-0 mb-3">
                    <div
                      class="row w-100 m-auto bg-white py-2 py-lg-3  rounded-4 text-center"
                    >
                      <div class="col-4 pe-3 pe-lg-0">
                        <i class="fas fa-clock text-orange"></i>
                        <p class="fw-normal fs-12 text-light-gray">Prep Time</p>
                        <p class="fw-bold fs-14 text-dark-gray">20 min</p>
                      </div>
                      <div class="col-4">
                        <i class="fas fa-fire-burner text-red2"></i>
                        <p class="fw-normal fs-12 text-light-gray">Cook Time</p>
                        <p class="fw-bold fs-14 text-dark-gray">30 min</p>
                      </div>
                      <div class="col-4 ps-3 ps-lg-0">
                        <i class="fas fa-users text-primary"></i>
                        <p class="fw-normal fs-12 text-light-gray">Servings</p>
                        <p class="fw-bold fs-14 text-dark-gray">4 people</p>
                      </div>
                    </div>
                  </div>`,
    statusMeal: "Intermediate",
    type: "Asian",
    nameOfMeal: "Chicken Tikka Masala",
    description: "Rich and creamy Indian curry with tender chicken pieces",
    ingFirst: "600g chicken breast, cubed",
    ingSecond: "1 cup plain yogurt",
    ingThird: "2 tablespoons tikka masala paste",
    ingForth: "400ml coconut cream",
    ingFifth: "1 onion, diced",
    ingSixth: "4 cloves garlic, minced",
    ingSeventh: "2 tablespoons ginger, grated",
    ingEighth: "400g canned tomatoes",
    ingNineth: "Fresh cilantro for garnish",
    instFirst: "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
    instSecond: "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
    instThird:
      "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
    instForth: "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes",
    instFifth:
      "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
    instSixth:
      "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice.",
    calories: "450 kal",
    protein: "38g",
    carb: "24g",
    fat: "22g",
    fiber: "4g",
    sodium: "760mg",
    firstTip: "Marinate chicken overnight for deeper flavor",
    secondTip: "Use full-fat coconut cream for richest sauce",
    thirdTip: "Adjust spice level by varying the tikka paste amount",
    forthTip: "Serve with naan bread and basmati rice",
  },

];
console.log(meal.length);

function generateBtn(){
    var randomNumber  = Math.floor(Math.random() * meal.length);
    return meal [randomNumber]
}

function mealDisplay(){
    var mealToDisplay = generateBtn();
    imgMeals.innerHTML = mealToDisplay.imgMeal;
    statusMeals.innerHTML = mealToDisplay.statusMeal;
    types.innerHTML = mealToDisplay.type;
    nameOfMeals.innerHTML = mealToDisplay.nameOfMeal;
    descriptions.innerHTML = mealToDisplay.description;
    ingFirsts.innerHTML = mealToDisplay.ingFirst;
    ingSeconds.innerHTML = mealToDisplay.ingSecond;
    ingThirds.innerHTML = mealToDisplay.ingThird;
    ingForths.innerHTML = mealToDisplay.ingForth;
    ingFifths.innerHTML = mealToDisplay.ingFifth;
    ingSixths.innerHTML = mealToDisplay.ingSixth;
    ingSevenths.innerHTML = mealToDisplay.ingSeventh;
    ingEighths.innerHTML = mealToDisplay.ingEighth;
    ingNineths.innerHTML = mealToDisplay.ingNineth;
    instFifths.innerHTML = mealToDisplay.instFifth;
    instSeconds.innerHTML = mealToDisplay.instSecond;
    instThirds.innerHTML = mealToDisplay.instThird;
    instForths.innerHTML = mealToDisplay.instForth;
    instFifths.innerHTML = mealToDisplay.instFifth;
    instSixths.innerHTML = mealToDisplay.instSixth;
    caloriess.innerHTML = mealToDisplay.calories;
    proteins.innerHTML = mealToDisplay.protein;
    carbs.innerHTML = mealToDisplay.carb;
    fats.innerHTML = mealToDisplay.fat;
    fibers.innerHTML = mealToDisplay.fiber;
    sodiums.innerHTML = mealToDisplay.sodium;
    firstTips.innerHTML = mealToDisplay.firstTip;
    secondTips.innerHTML = mealToDisplay.secondTip;
    thirdTips.innerHTML = mealToDisplay.thirdTip;
    forthTips.innerHTML = mealToDisplay.forthTip;
}
generateBtns.addEventListener ('click',mealDisplay);
