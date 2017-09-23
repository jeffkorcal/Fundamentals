/* 
URLS

String: "
http://www.nowhere.com
http://nowhere.com
http://blog.nowhere.com
https://www.nowhere.com
http://www.nowhere.com/product_page.html
http://www.nowhere.com/images/image.gif
http://www.nowhere.com/product/
http://www.nowhere.com/product/3456
http://www.nowhere.com/product_page.php?product=28
http://www.nowhere.com?product=28&color=blue
http://www.nowhere.com#details
"

# Protocol portion
Regex:  /^https?:\/\// OR /^(http|https):\/\//

# Domain portion
/^(http|https):\/\/[\w.\-]+\.[A-Za-z]{2,6}/

# Query string portion
Regex:  /^(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+.*$/
Regex:  /^(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+[\w\-.,@?^=%&:/~\\+#]*$/
*/

const str = 'http://www.nowhere.co.jp/product=28&color=blue';
// const match = str.match(/^(?:https?:\/\/)?([\w\-.]+)(?:[\/?#]?)/);
const match = str.match(/^(?:http|https):\/\/([\w\-.]+)(\.[\w\-]+)+(.*)$/);
console.log(match);

/* 
EMAILS 

Regex:  /^\w+@\w+\.\w{3}$/
String: "someone@somewhere.com"

Regex:  /^[\w.%+\-]+@[\w.\-]+\.\w{2,3}$/
String: "someone@somewhere.co.uk"

Regex:  /^\w+@[\w.\-]+\.[A-Za-z]{2,3}$/
String: "someone@somewhere.co.uk"

# Email and domain specifications allow other characters
Regex:  /^[\w.%+\-]+@[\w.\-]+\.[A-Za-z]{2,3}$/

Regex:  /^[\w.%+\-]+@[\w.\-]+\.[A-Za-z]{2,6}$/
String: "someone@somewhere.museum"

# Top-level domain verfication
Regex:  /^[\w.%+\-]+@[\w.\-]+\.([A-Za-z]{2}|aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|xxx)$/
String: "someone@somewhere.museum"

*/
