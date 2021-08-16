# Contributing

Also refer to
[contributing in Carbon](https://github.com/carbon-design-system/carbon/blob/master/.github/CONTRIBUTING.md).

## 1. Fork the repo

Go to
[Carbon for Cloud & Cognitive's repository on GitHub](https://github.com/carbon-design-system/ibm-cloud-cognitive)
and [fork the repo](https://help.github.com/articles/fork-a-repo/),
[syncing with the original repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#keep-your-fork-synced).

## 2. Work in a branch

When contributing to Carbon for Cloud & Cognitive, your work should always be
done in a
[branch off your fork](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository).

## 3. Start the development server

1. To install the project's dependencies, from the root directory of your fork,
   run `yarn --offline`
2. To scaffold a new component or pattern, run `yarn generate ComponentName`,
   where `ComponentName` is the name of the component or pattern
3. To get your development server running and to start coding, run
   `yarn storybook`

This will start a development server where you can see any changes you are
making to components in our Storybook.

The command to start the server will differ depending on which package you are
working within. To find out which command you'll need to run, you can check the
`scripts` property in the package's `package.json`.

Once it's done building, you can edit source code or create new components. The
system is set up to automatically bundle your additions / changes. Visit
[`http://localhost:3000`](http://localhost:3000) to see the changes happen on
the fly.

### What is this Canary thing?

In case you were thinking what, why or how with regards to the Canary lines in
the components...

They were added to enable component feature flags, that is the enabling of
components through user settings.

This allowed the removal of the term/package `experimental` and permitted the
publication of all components in a single package. Those that have not yet
completed the release review process are considered to be `canary` and require
the consumer to enable via a feature flag.

See example component enabled via feature flags on
[codesandbox](https://codesandbox.io/s/example-component-canary-olif5).

For more information on how this affects components see
[CANARY_STRUCTURE.md](https://github.com/carbon-design-system/ibm-cloud-cognitive/blob/master/docs/guides/CANARY_STRUCTURE.md).

## 4. Test your JavaScript code

If you're contributing to our JavaScript code, test your changes by running
`yarn test`.

New tests are written in
[React Testing Library](https://testing-library.com/docs/react-testing-library/intro),
with [Enzyme](https://enzymejs.github.io/enzyme) available for migration
compatibility, and follow the
[User Experience Standards Adopter Guide](https://github.ibm.com/IBMPrivateCloud/BedrockServices/blob/master/AdopterGuides/CommonUXStandardsAdoptionGuide.md#testing).

## 5. Make a pull request

**Note:** Before you make a pull request,
[search the issues](https://github.com/carbon-design-system/ibm-cloud-cognitive/issues)
to see if a similar issue has already been submitted. If a similar issue has
been submitted, assign yourself or ask to be assigned to the issue by posting a
comment. If the issue does not exist, please make a new issue.

Refer to
[contributing in Carbon](https://github.com/carbon-design-system/carbon/blob/master/.github/CONTRIBUTING.md#what-is-the-contribution-process)
for some contribution quick tips.

According to a
[SmartBear study of a Cisco Systems programming team](https://smartbear.com/learn/code-review/best-practices-for-peer-code-review),
an effective pull request should not have more than 400 lines of code changed,
so do not create one massive PR if it can be
[scoped down into smaller, focused PRs of independent behaviors and functionality](https://www.netlify.com/blog/2020/03/31/how-to-scope-down-prs/).

When you're at a good stopping place and you're ready for feedback from other
contributors and maintainers,
[commit](https://docs.github.com/en/github/managing-files-in-a-repository/adding-a-file-to-a-repository-using-the-command-line),
[push to your fork](https://docs.github.com/en/github/using-git/pushing-commits-to-a-remote-repository),
and
[create a pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork).

See [Conventional Commits](https://www.conventionalcommits.org) for more
information about how to write your commit message.

Also refer to
[How to write the perfect pull request](https://github.blog/2015-01-21-how-to-write-the-perfect-pull-request).

## 6. Updating a pull request

Stay up to date with the activity in your pull request. Maintainers will be
reviewing your work and making comments, asking questions, and suggesting
changes to be made before they merge your code.

When you need to make a change, use the same method detailed above.

Once all revisions to your pull request are complete, a maintainer will squash
and merge your commits for you.

## 7. New production dependencies

If you introduce a new dependency to package.json then there will be some
additional work to do.

- [ ] Verify the dependency has previously been
      [pedigree reviewed](https://pedigree-service.wdc1a.cirrus.ibm.com)
- [ ] Verify the dependency
      [doesn't contain any vulnerabilities](https://snyk.io/vuln)
- [ ] Verify the dependency [bundle size](https://bundlephobia.com) is
      acceptable
- [ ] Verify the dependency is [actively maintained](https://www.npmtrends.com)
