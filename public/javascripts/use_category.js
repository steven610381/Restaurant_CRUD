const categoryValue = document.querySelector(".use_category")
const restaurantOptions = [...document.querySelectorAll("#exampleFormControlSelect1 option")]

console.log('categoryValue', categoryValue)
console.log('restaurantOptions', restaurantOptions)

restaurantOptions.forEach(item => {
  categoryValue.innerText === item.innerHTML
    ? item.selected = true
    : item.selected = false;
})