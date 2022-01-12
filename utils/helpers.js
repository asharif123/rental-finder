module.exports = {
    log: function(foo) {
        // where the actual data is
        // console.log(foo[0].listing[0].listing);
        console.log(foo[0].listing[0].listing.images[0]);
        },
        
    address: function(data) {
        return (data[0].listing[0].listing.geo_location.full_address);
    },
    
    monthly_rate: function(data) {
        return (data[0].listing[0].listing.rates.monthly_rate);
    },

    images : function(data) {
        return (data[0].listing[0].listing.images[0]);
    }

      
        
}

