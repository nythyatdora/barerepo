import type { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";
import { HostedZone } from "aws-cdk-lib/aws-route53";
import {
  Certificate,
  CertificateValidation,
} from "aws-cdk-lib/aws-certificatemanager";

export default {
  config(_input) {
    return {
      name: "portfolio",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const hostedZone = HostedZone.fromLookup(stack, "hosted-zone", {
        domainName: "nythyatdora.com",
      });

      const certificate = new Certificate(stack, "certificate", {
        domainName: "nythyatdora.com",
        subjectAlternativeNames: ["*.nythyatdora.com"],
        validation: CertificateValidation.fromDns(hostedZone),
      });

      const site = new NextjsSite(stack, "portfolio", {
        customDomain: {
          domainName: "nythyatdora.com",
          cdk: {
            hostedZone,
            certificate,
          },
        },
        cdk: {},
        environment: {},
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
