var expect = require("chai").expect;
var parseStackSpecification = require("../validate");

describe("parseStackSpecification()", function() {
    it("should tokenize a Software Stack Specification", function() {
        const fixtures = [
            { spec: "sax", packages: 1 },
            { spec: "githubname/reponame", packages: 1 },
            { spec: "@myorg/privatepackage", packages: 1 },
            { spec: "@myorg/mypackage@latest", packages: 1 },
            { spec: "@myorg/privatepackage@1.5.0", packages: 1 },
            { spec: "sax@0.1.1", packages: 1 },
            // FIXME            { spec: 'sax@">=0.1.0 <0.2.0"', packages: 1 },
            // FIXME            { spec: 'sax@">=0.1.0<0.2.0"', packages: 1 },
            // FIXME            { spec: '@myorg/privatepackage@">=0.1.0 <0.2.0"', packages: 1 },
            // FIXME            { spec: 'sax@">=0.1.0 <0.2.0" bench supervisor', packages: 3 }
            { spec: "sax bench bn-bruecken", packages: 3 }
        ];

        fixtures.forEach(element => {
            var packages = parseStackSpecification(element.spec);

            expect(packages).to.have.lengthOf(element.packages);
        });
    });
});