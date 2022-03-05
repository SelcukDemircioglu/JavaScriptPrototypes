    
      String.prototype.replaceAll = function (val,rep) {
        
        var string = this;
      
        var count =  string.split(val);
    
        for (let i = 0; i <count.length; i++) {
            string=string.replace(val,rep);
        }
       
        return string;
    }
    
    /**
     * 
     * @param {*} itemKey   
     * @returns 
     */
    Array.prototype.orderByAsc=function(itemKey){
     
        if(!itemKey) return this;
          const sortArray=[...this];
          const sortdata= sortArray.sort(function (a,b) {return a[itemKey]-b[itemKey]});
    
         return sortdata;
    }
    
    /**
     * 
     * @param {*} itemKey  artan
     * @returns 
     */
    Array.prototype.orderByDesc=function(itemKey){
      
        if(!itemKey) return this;
    
        const sortArray=[...this];
        const sortdata= sortArray.sort(function (a,b) {return b[itemKey]-a[itemKey]});
    
       return sortdata;
    }

    /**
     *  dd mmm yyyy hh mm ss 
     * @param {*} format 
     * @returns 
     */
    Date.prototype.dateFormat=function (format="ddmmyyyy") {
    
        const dd=this.getDate();
        const mm=this.getMonth()+1
        const yyyy=this.getFullYear()+1
        const thh=this.getHours();
        const tmm=this.getMinutes();
        const tss=this.getSeconds();
    
          
    
        const dayD=format.indexOf("d")
        const dayDD=format.indexOf("dd")
        const dayStartIndex=dayDD>=0?dayDD:dayD>=0?dayD:-1;
        const dayRepl=dayDD>=0?"dd":dayD>=0?"d":"";
        const dayStr=dayDD>=0&&dd<10?"0"+dd:dd.toString();
        format=dayStartIndex>=0?format.replace(dayRepl,dayStr):format;
        
        
        const monthM=format.indexOf("m")
        const monthMM=format.indexOf("mm")
        const monthStartIndex=monthMM>=0?monthMM:monthM>=0?monthM:-1;
        const monthRepl=monthMM>=0?"mm":monthM>=0?"m":"";
        const monthStr=monthMM>=0&&mm<10?"0"+mm:mm.toString();
        format=monthStartIndex>=0?format.replace(monthRepl,monthStr):format;
        
        const yearStartIndex=format.indexOf("yyyy")
        format=yearStartIndex>=0?format.replace("yyyy",yyyy.toString()):format;
    
        
        const hourH=format.indexOf("h")
        const hourHH=format.indexOf("hh")
        const hourStartIndex=hourHH>=0?hourHH:hourH>=0?hourH:-1;
        const hourRepl=hourHH>=0?"hh":hourH>=0?"h":"";
        const hourStr=hourHH>=0&&thh<10?"0"+thh:thh.toString();
        format=hourStartIndex>=0?format.replace(hourRepl,hourStr):format;
        
       
    
        const minuteM=format.indexOf("M")
        const minuteMM=format.indexOf("MM")
        const minuteStartIndex=minuteMM>=0?minuteMM:minuteM>=0?minuteM:-1;
        const minuteRepl=minuteMM>=0?"MM":minuteM>=0?"M":"";
        const minuteStr=minuteMM>=0&&tmm<10?"0"+tmm:tmm.toString();
        format=minuteStartIndex>=0?format.replace(minuteRepl,minuteStr):format;
    
        const secondS=format.indexOf("s")
        const secondSS=format.indexOf("ss")
        const secondStartIndex=secondSS>=0?secondSS:secondS>=0?secondS:-1;
        const secondRepl=secondSS>=0?"ss":secondS>=0?"s":"";
        const secondStr=secondSS>=0&&tss<10?"0"+tss:tss.toString();
        format=secondStartIndex>=0?format.replace(secondRepl,secondStr):format;
      return format;
    
    }
     
      String.prototype.firstToUpper = function () {
          var string = this;
          string =string.substring(0,1).toUpperCase()+string.substring(1,string.length);
          return string;
      }

};
