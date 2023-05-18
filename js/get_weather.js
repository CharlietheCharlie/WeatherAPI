$(()=>{
$.ajax({
    url: 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWB-C1F8487C-0546-4FAB-A95D-00078B766486&locationName=%E4%B8%AD%E6%AD%A3%E5%8D%80&elementName=T',
    type: 'GET',
    dataType:'json',
    success: function(res){
        $('#city_name').html(res.records.locations[0].locationsName);
        $('#district').html(res.records.locations[0].location[0].locationName);
        $('#tempture').html(res.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value+"&#176;");
        // console.log(res.records.locations[0].location[0].weatherElement[0].time);
        let todayWeekday = new Date().getDay();
        const week = ['週日','週一','週二','週三','週四','週五','週六'];
        let j = 0;
        for(let i = 0; i < 10; i++){           
            if(i % 2 == 0){
                let T = res.records.locations[0].location[0].weatherElement[0].time[i].elementValue[0].value
                let temperature = `<strong>${T}&#176;</strong>`;
                $('.block').eq(j).find('h6').html(temperature); 
                $('.block').eq(j).find('small').html(week[(todayWeekday+j)%7]);
                j++;
            }
        }
       
    },
    error: function(e){
        console.log(e);
    }





})





})