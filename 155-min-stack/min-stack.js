
var MinStack = function() {
    this.array = [];
    this.minArray =[];
    this.minEle = Infinity;
    
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
   this.array.push(value);
   if(value <= this.minEle){
    this.minEle = value;
    this.minArray.push(value);
   }
   
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let popped = this.array.pop();
    if(popped ===  this.minEle){
        let minPopped = this.minArray.pop();
        if(this.minArray.length>0){
        this.minEle = this.minArray[this.minArray.length-1];
        }else{
        this.minEle = Infinity;
        }
    }
    return popped;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
     return this.array[this.array.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minEle;

};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

