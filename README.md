## What is Star Nations?

Star Nations is a framework for a browser-based MMORTS (massively multiplayer real-time strategy game). Popular games in this genre include OGame and Ikariam. Star Nations is intended to be built in React on the front end, with an Express server on the back end. It uses sockets for real-time interaction between the two ends, and Redis for scheduling of actions such as completed buildings and combat. The goal of the project is to create an MMORTS with greater customizability, as well as a richer front end experience than the usual point and click. The project itself is also intended to be an opportunity for new and intermediate web developers who want to contribute to something.

## What is the tech stack?

* React on the front end
* Node on the back end, using Express and Sequelize
* MySql for the database
* Redis for in-memory storage

## How can I contribute?

* You can claim unassigned tasks in the Issues tab 
* You can suggest useful features to be added
* You can add unit tests where they might be lacking
* You can suggest changes to architecture
* You can refactor older code to meet modern standards

To do any of this, first create a new Issue, or claim an existing one. That way I can vet you, your idea, and assign you to a team if it seems good.

## What's the workflow?

First you create an Issue with your intended change. Or you grab an Issue that has been opened but not assigned, or has been abandoned. If the person assigned to an Issue hasn't been active in the Issue for 2 weeks then it's considered abandoned. I will then assign you to one of 3 teams. The teams are named after major Star Trek starships: Enterprise, Voyager, and Discovery. Each team has its own `develop` branch: `develop-enterprise`, `develop-voyager`, and `develop-discovery`. You will make your personal branches off the development branch for your team. I recommend using the Git Flow process but it's not necessary.

Do your work locally, then create a pull request with your work. It's up to you how many PRs you make. In general I would prefer smaller, focused PRs. It's OK to make multiple PRs for the same ticket. If your PR is approved, it will be merged into your team's development branch.

Each team has its own development server. When a PR is approved and the development branch is updated, the changes are pushed to the team's development environment.

After certain major milestones are reached, or on a certain schedule, the team development branches are merged together into the primary `develop` branch, which is then pushed to the main development environment. This is where we test that the teams' changes don't collide. After they are vetted, `develop` is merged into `main` and released to the production environment.

## How does versioning work?

We use semantic versioning. If the version is in format `x.y.z`, then

* `x` (MAJOR) is an incompatible API change. When you fundamentally change the nature of the front end or back end.
* `y` (MINOR) is a backwards-compatible change. This would usually include new features or refactors of old features.
* `z` (PATCH) is a small bugfix, or a small tweak to an existing feature.

## What's the Code of Conduct?

There's no solid Code of Conduct. We all know what it means to be respectful. I will treat everyone who works on this project as a professional. I expect they do the same for me and others on the team. Because this is a lot of leeway, it also means that failure to meet this standard will result in one warning, and then immediate removal from the team.