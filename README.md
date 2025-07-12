# Aircraft Defect Viewer

## What and why

Aircraft Defect Viewer is a web application that allows users to view and filter
detected defects for the fleet. 

## Stack choices and tradeoffs 
The chosen stack for this application was MongoDB (database), ExpressJS (backend) and React (frontend).
TailwindCSS was used for applying css styles and Tanstack Query (React Query) was used for performing
calls to the backend. 

Everything is Dockerized and you can start the entire stack with a single command.

The foremost motivation for choosing this particular stack was my previous familiarity with 
the chosen technologies (even though MongoDB and TailwindCSS were somewhat new to me). 

## How AI and low-code tools were used
Neovim being my go-to editor, I had AI assistance with my work from a plugin called [CodeCompanion](https://codecompanion.olimorris.dev/) 
It has a chat, inline code editing and generation and agentic workflows, as well (which I have yet to explore).
You can configure it to use the LLM of your choice. I use OpenAI, more specifically gpt-3_5-turbo-0125.

I also have a command line tool called [Yai](https://github.com/ekkinox/yai)
It allows for generating/executing commands directly in the command line in addition to the traditional chat.

I mostly kept my prompts narrow in scope; quick changes that I either knew how to write manually - but generating the code was much faster,
or writing lines of code for mongoose (Mongodb object modeling tool) or TailwindCSS - both with which I had less experinece with.
AI proved invaluable in getting me going, even though I did need to adjust things manually now and again.

## Evolution in production environment
The app is obviously not production-ready yet (for several reasons..!), but if it did get that far, a number of things would need to be considered:
- Database performance: indexes, sharding (partitioning), read-only/write-only replicas. 
- Query performance: depending on the usage patterns, would we perhaps like to entertain the idea of having an in-memory database for frequent queries?
- Backend: if we go forward with docker, where do we run the containers? Which cloud provider/service? Do we need kubernetes?
- Frontend: Frontend needs to be bundled to minimize and optimize the code. Which bundler do we use?

## Setup instructions
To run Aircraft Defect Viewer, run 
```
docker compose up
```
in the root directory.

This will start all the required services, including frontend, backend and database.

The frontend will be available at http://localhost:5173/

## Future improvements
### Frontend
- As of writing this filtering by `reported_at` -field does not work, would need to be fixed.
- The frontend is not mobile-friendly. Like, at all. That would need to be fixed, too. Apply
  different layouts for smaller screens, hide some fields and display the filter options in a modal
  of some sort with a button click.
- We should allow users to change the ordering of the retrieved defects by clicking on the table headers
- For now, the filter options (queryControls) live within the Container -component, from where they are 
  served as props to the child components, QueryControls and DefectList. This causes both components
  to re-render when the filter options are adjusted; the flickering makes for poor user experience.
  The state should be relocated (among other things, I'm sure).
- A debounce is currently applied to fetching defects from the backend - the goal of this was to
  allow users time to write a registration number before the call is made. 
  But now it applies to all the filter options, making it (perhaps) unnecessarily slow to react.
  This has also given birth to some React errors visible in the console - maybe not a good sign?
  Further logic could be applied to eliminate unnecessary calls to the backend, for example when a 
  registration number has been searched for and another filter is then applied - we don't really need 
  to make another call with both parameters, we could just filter the results further (that is IF we 
  stored the defects in state, which we do not at the moment).
  

### Security
- All secrets should be (passwords at least, perhaps usernames too) kept out of source code.
  Depending on the eventual infrastructure and platform, there are safer ways to store secrets,
  e.g. Secrets in Github repository or AWS Secrets Manager.

### Backend
 - The cors rules need to be revised, first of all.  
 - Validate and sanitize/escape user input so that only
   valid/regulated inputs are allowed.

### Tests
 - This app contains no tests (:cryingface), but they are what - in a perfect world - should've been written first, before any actual program code.
 - Tests guide the implementation and help make the code more manageable. On top of that good tests
   work as documentation for the app.
 - Most of all they function as a safeguard against regressions, giving the developer the confidence to try 
   all sorts of things and now have to worry about delivering broken code.
 - Use Jest for unit tests/integration tests, and something like Playwright for e2e 

### CI/CD
Github Action(s) to run tests and create images (should we use Docker to run our apps), merge passing feature branches 
back into main and maybe even deploy.


