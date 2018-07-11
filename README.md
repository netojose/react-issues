# React issue viewer

Display [react](https://reactjs.org/) issues on [github](https://github.com/facebook/react/issues).


## Built with

- [React](https://reactjs.org/)
- [Create react app](https://github.com/facebook/create-react-app)
- [Semantic UI React](https://react.semantic-ui.com/introduction)

## Online demo
https://react-issues.herokuapp.com/

## Install instructions
* `git clone git@github.com:netojose/react-issues.git`
* `cd react-issues`
* `npm install or yarn install`
* `npm start or yarn start`

## Relevant information

### Rate limit
For unauthenticated requests, the rate limit allows for up to [60 requests per hour](https://developer.github.com/v3/#rate-limiting). So, if the application receives multiple accesses, the github API can deny requests, until the API request limit be reseted.

### Pagination
Unfortunately, github response not returns the pagination information. So,to perform a pagination, I'm using response header information to retrieve last page number, avoiding make a second request to retrieve this, because de rate limit.

### Styling
How is not allowed use any packages/libraires, I can't use some robust solution to avoid some css problems (scope isolation, dead code elimination, etc.). I prefer use something like CSS in JS or CSS modules, but on this project, I'm just using the Vanilla CSS, wrapping the components to avoid scope isolation problem.