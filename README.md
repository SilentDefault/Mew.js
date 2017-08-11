# Mew.js
> Convert integer numbers to different formats

## Why ##
Numbers are used with several meanings and different contexts, Mew provides the help of converting integers to the following contexts:
#### Month ####
Get the name of the month to which the integer corresponds
```js
mew.toMonth(1); //=> "January"
mew.toMonth(4); //=> "April"
mew.toMonth(11); //=> "November"
```
if `configuration.zeroBased` is true:
```js
mew.toMonth(1); //=> "February"
mew.toMonth(4); //=> "May"
mew.toMonth(11); //=> "December"
```
#### Day of week ####
Get the name of the day to which the integer corresponds
```js
mew.toDay(1); //=> "Sunday"
mew.toDay(4); //=> "Wednesday"
mew.toDay(6); //=> "Friday"
```
if `configuration.zeroBased` is true:
```js
mew.toDay(1); //=> "Monday"
mew.toDay(4); //=> "Thursday"
mew.toDay(7); //=> "Saturday"
```
#### Ordinal ####
Get the ordinal name of the number to which the integer corresponds
```js
mew.toOrdinal(1); //=> "First"
mew.toOrdinal(3); //=> "Third"
```
#### Cardinal ####
Get the cardinal name of the number to which the integer corresponds
```js
mew.toCardinal(0); //=> "zero"
mew.toCardinal(1); //=> "one"
mew.toCardinal(4); //=> "four"
mew.toCardinal(11); //=> "eleven"
```
#### Roman ####
Converts the integer to Roman graphic number
```js
mew.toRoman(1); //=> "I"
mew.toRoman(4); //=> "IV"
mew.toRoman(11); //=> "XI"
```
#### Specific unit ####
Obtains a string with the integer specified with the specified unit, but the unit depends if the integer need a plural unit.
And the integer can be convert to word if the third parameter are true.
`obviously needs more logic to anothers languages`
```js
mew.to('cat', 1); //=> "1 cat"
mew.to('cat', 1, true); //=> "one cat"
mew.to('cat', 2); //=> "2 cats"
mew.to('cat', 2, true); //=> "two cats"
```
## More functions? ##
I started to code Mew at 2017-08-10, in the future i wish make Mew more useful and add the next functions:
-  [ ] integer to Year unit (Eons, Decades, Millennials, etc).
-  [ ] pass a function as parameter in `mew.to()` to expand to new horizons.
-  [ ] add a configuration options to specify the first day of week. 
-  [ ] integer to Money unit ($,€,¥, etc).
## More languages? ##
I'm a latin-american person, that's the reason that the spanish language have more content.
If you can add and fix a language, feel be free to do that.
