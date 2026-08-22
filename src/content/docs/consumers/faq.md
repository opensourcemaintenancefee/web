---
title: Frequently Asked Questions
description: Questions and answers about the Open Source Maintenance Fee
sidebar:
  order: 30
---

If your question isn't listed below, consider asking on the [Open Source Maintenance Fee Discussions](https://github.com/orgs/opensourcemaintenancefee/discussions).

### Q: Who pays the fee?

Individuals and organizations that use an Open Source Project's binary releases as part of revenue generating activities and meet the minimum annual revenue threshold (typically US$10,000) must pay the Maintenance Fee.

Government agencies are treated similarly when they use projects that require a Maintenance Fee, regardless of how their funding is structured.

Open Source Projects that require a Maintenance Fee and meet the minimum revenue threshold must also pay any Maintenance Fees required by their direct dependencies.

### Q: How much is the fee?

$10 per month per project is the norm for most projects. However, projects may set their own pricing tiers, so be sure to check with each project.

### Q: Do I have to pay the fee for each product in my organization?

No. An organization only needs to pay the fee once and all of its products are covered.

### Q: Do I have to pay the fee if my organization makes money but our product that uses the project is offered for free?

Yes. The requirement to pay the Maintenance Fee is based on whether the software is used as part of revenue generating activities and whether the organization meets the minimum revenue threshold, not on whether the product itself is sold.

For example, a product may be offered for free while generating revenue through advertising, lead generation, or paid services. In such cases, the Maintenance Fee applies.

### Q: If I use a project and that project depends on other projects do I need to pay all of them?

No. Your relationship is with the projects you directly choose to use. You pay the Maintenance Fee only for projects your project explicitly names as dependencies. This includes tools your organization intentionally adopts for development, building, testing, or CI. These are your direct dependencies and they are the projects you pay a Maintenance Fee.

A transitive dependency is a project included only because another dependency requires it. You do not pay the Maintenance Fee to those projects because they are not your direct dependencies.

See [Which projects do you pay?](/consumers/which) for a detailed walkthrough.

### Q: Do I have to pay for newer versions of the project?

No. As long as you pay the Maintenance Fee, you are entitled to all available versions.

### Q: How long do I have to pay the fee?

You pay the Maintenance Fee for as long as you use the project's maintained binary releases.

### Q: Can I pay by yearly invoice?

Each project decides how it accepts Maintenance Fee payments. GitHub Sponsors is a popular choice and it supports both credit cards and [invoiced payments](https://github.com/resources/events/support-open-source-sustainability).

### Q: What if I don't want to pay the Maintenance Fee?

That's fine. You can download the project's source code and follow the Open Source license for the software.

Do not download releases. Do not reference packages via a package manager. Do not use anything other than the source code released under the Open Source license.

If you choose not to pay the Maintenance Fee, you should avoid relying on the project's maintained binary releases and related services.

### Q: I paid the fee, why aren't the maintainers fixing my bugs and answering my questions now?

The Maintenance Fee keeps the project running. It does NOT pay for support. Some projects do offer additional support programs that provide bug fixes or SLAs for answers, so investigate those options if you need guarantees.

### Q: Why not donate to a project?

Donations are a great way to reward maintainers for exemplary work. But donations are like bonuses, you like to get them but you can't count on them every year. Regular contributions from the Maintenance Fee enables maintainers to make plans how best to keep the project running.

### Q: I heard money won't solve Open Source problems.

That's not a question. But it is true that money won't solve every problem Open Source Projects face. However, paying maintainers is a very direct incentive to encourage them to keep their projects running. By keeping their projects running, more users may start paying the Maintenance Fee, again encouraging the maintainers to keep the project running. It's a virtuous feedback loop.

--- 

## Questions about the CRA and the Open Source Maintenance Fee (OSMF)

### Q: Does paying the Open Source Maintenance Fee (OSMF) make a project "CRA compliant"?

A: No. The OSMF is not a compliance program. It is a way for organizations that use binary releases in revenue generating contexts to contribute back to the projects they depend on. CRA compliance is the responsibility of organizations that place products on the EU market. Paying the OSMF does not transfer that responsibility to maintainers.

### Q: Does an OSMF maintainer have additional obligations under the EU Cyber Resilience Act (CRA)?

A: No. Maintainers who participate in OSMF remain under the same CRA rules as any other Open Source maintainer. Publishing source code under an OSI-approved license remains outside CRA scope, and optional binary releases remain "as-is" convenience builds. The Maintenance Fee is not a license fee and does not transform the project into a commercial manufacturer, importer, or distributor under the CRA.

### Q: If my organization pays the OSMF, can we claim CRA conformity on that basis?

A: No. CRA conformity requires your organization to perform its own assessment and documentation for products you place on the EU market. Paying the OSMF does not provide certification, warranties, or CE marking. It simply supports maintainers so they can continue delivering timely fixes and improvements.

### Q: Why should we pay the OSMF if it doesn't provide CRA compliance?

A: Because your organization benefits from using the project's binaries in revenue generating products. Paying the OSMF helps maintainers cover the cost of responsible stewardship—such as fixing security issues, providing timely patches, and sustaining long-term development. While this does not fulfill CRA obligations on your behalf, it strengthens the software you rely on to meet them.

### Q: Who is responsible for CRA compliance?

A: The organization that places a product on the EU market is responsible for CRA compliance. If your company incorporates Open Source into products you distribute or sell in the EU, you must ensure compliance. Open Source maintainers (whether or not they participate in OSMF) do not carry that responsibility.

---

## Questions from Open Source maintainers that depend on other projects that require a fee.

### Q: Do I have to pay my dependencies if my Open Source project does not make enough revenue?

No. Until your project makes enough revenue to pay Maintenance Fees for your direct dependencies, you do not need to pay.

### Q: My Open Source project takes sponsorships, do I need to pay a fee?

If the sponsorships are donations (i.e., voluntary and not required for access or use), they are not revenue and the Maintenance Fee does not have to be paid. If the sponsorships are required (for example, by requiring a Maintenance Fee), then the sponsorships are revenue and the fee does need to be paid.

### Q: Do I need to pay a fee for a revenue generating Open Source project's direct dependencies if I'm just a contributor?

No. A project that makes revenue must pay its fees, but that is a task for the maintainers of the project. Contributors need not be involved.
