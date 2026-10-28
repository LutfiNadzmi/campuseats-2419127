# AI usage log

Using AI never costs marks; a vague or missing log does.
Add a new section every week, before you tag. Did not use AI? Write "None" under Tool(s).

## Week 1

- Tool(s): None
- What I asked for:
- What I kept, changed or rejected, and why:
- One thing the AI got wrong and how I fixed it:

## Week 2

- Tool(s): ChatGPT
- What I asked for: Explanation for this week code and to instafill food menu in vendors.js
- What I kept, changed or rejected, and why: Kept the food menu in vendors.js
- One thing the AI got wrong and how I fixed it: None

## Week 3

- Tool(s): Claude
- What I asked for: Step-by-step help with the Lab 3 sheet: converting vendors.js to JSON (and adding more menu items and shops), fetching with useEffect, the cart with quantities, the cart page, the checkout form with validation, and my digit-7 feature (order notes per item).
- What I kept, changed or rejected, and why: I kept the structure the lab sheet gave (lifted cart state, derived total and badge with reduce, validate() returning an errors object). I changed the placeholder shops and my own restaurant's data to match my menu, and saved the cart lines in lastOrder so the notes show on the "Order placed" page.
- One thing the AI got wrong and how I fixed it: It left a placeholder, `content = ( ...vendor cards and menu... )`, in the App.jsx code it gave me, which caused a Vite parse error. After I fixed that, there was a duplicate block of code that overwrote `content`, so clicking Cart appeared to do nothing. I read through the if/else chain, found the duplicate block and deleted it.

## Week 4

- Tool(s): Claude
- What I asked for: Step-by-step help with the Lab 4 sheet: custom hooks (useLocalStorage, useVendors, useCart), a cart context with a provider, and the pages, layout and routes with React Router. Also my digit-7 feature (save order notes and show them on the Orders page).
- What I kept, changed or rejected, and why: I kept the structure from the lab sheet (hooks in src/hooks, context in src/context, pages in src/pages, Layout with Outlet). I kept derived values (count and total with reduce) instead of storing them. I moved the old CartPage out of components into pages and deleted the old file. Notes were already saved on each cart line, so placeOrder stores them in the order, and I only had to display them on OrdersPage.
- One thing the AI got wrong and how I fixed it: I checked the AI code against the lab sheet and nothing needed fixing (I think so).
