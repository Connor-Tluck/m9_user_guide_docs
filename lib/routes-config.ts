// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
  tag?: string;
};

export const ROUTES: EachRoute[] = [
  {
    title: "Digital Surveyor",
    href: "/digital-surveyor",
    noLink: true,
    items: [
      { title: "Overview", href: "/overview" },
      { title: "Getting Started", href: "/getting-started" },
      { title: "Attribute Templates", href: "/attribute-templates" },
      { title: "Adding Subattributes", href: "/adding-subattributes" },
      { title: "Creating Specialized Layers", href: "/creating-specialized-layers" },
      { title: "Running Perception", href: "/running-perception" },
      {
        title: "QA/QC Workflows",
        href: "/qaqc",
        noLink: true,
        items: [
          { title: "Objects QA/QC Workflow", href: "/objects-qaqc-workflow" },
          { title: "Linear Features QA/QC Workflow", href: "/linear-features-qaqc-workflow" },
          { title: "Sign Assembly QA/QC Workflow", href: "/sign-assembly-qaqc-workflow" },
          { title: "Sign Assembly Troubleshooting", href: "/sign-assembly-troubleshooting" },
          { title: "QA/QC Workflows (Legacy)", href: "/qa-qc-workflows" }
        ]
      }
    ],
  },
  {
    title: "Videos",
    href: "/videos"
  },
  {
    title: "Sandbox",
    href: "/sandbox",
    noLink: true,
    items: [
      { title: "Getting Started", href: "" },
      { title: "Example Deliverables", href: "/example-deliverables" }
    ]
  }
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
