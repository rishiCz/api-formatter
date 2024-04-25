# API Formatter
This is a web app that lets you call multiple APIs at the cost of one.
API formatter introduces a new layer between APIs and user making multiple calls faster and data structured

## Example
! Assuming each call takes n seconds and the processing layer takes no time
### Direct Call
![slow](https://github.com/rishiCz/api-formatter/assets/98217604/838dc174-cb4d-4ada-82c5-95a185ec87f7)
#### The conventional method takes the sum of all the time taken by each api to get the data

### API Formatter Call
![fast](https://github.com/rishiCz/api-formatter/assets/98217604/3916b3d4-97c7-4c04-9401-60634d559497)
#### The introduction to the processing layer reduces the time to only the largest time taken by an API from the list
#### Additionally the data returned is structured and in a single object

## All Keys Feature
The API formatter has a feature which will let you call multiple API's of same structure having a different endpoints/queries or any key.
#### In the below image we are creating an all keys API that will fetch multiple users on the basis of username that is to be added at the end.

![key](https://github.com/rishiCz/api-formatter/assets/98217604/61ae7a39-889c-4fc5-9826-a8f067be0634)


The API call will look like this where we will pass all the usernames as the key query parameter
![postKeys](https://github.com/rishiCz/api-formatter/assets/98217604/5a478f7a-0a1f-444b-9f40-27c1adbbaca0)





