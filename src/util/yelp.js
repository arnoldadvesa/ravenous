import axios from "axios";

const apiKey =
  "ygrx1xdxSiNSQfYjZQM4q6ImAc_wf5_JEtfdYAe0eoEzNPUqKAnaG33_U6G86PoTu2uWZMCTI1rHK-r-WcjX9ZJ0H1i0WL_zr2F2iZNRhVR4mqKh9y7_p54qbO_1W3Yx";

// const yelp = "";

export const search = (term, location, sortBy) => {
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          Authorization: `Bearer ${apiKey}`
        }
      }
    )
    .then(response => {
      return response.data;
    })
    .then(jsonResponse => {
      if (jsonResponse.businesses) {
        let businessesArray = [];
        jsonResponse.businesses.map(business => {
          const businessObj = {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories.title,
            rating: business.rating,
            reviewCount: business.review_count
          };
          businessesArray.push(businessObj);
        });
        return businessesArray;
      } else {
        return;
      }
    })
    .catch(error => console.log(error));
};
