import React from "react";
import Link from "next/link";
import { Button } from "@radix-ui/themes";

const IssuesPage = () => {
    return (
        <Button>
            <Link href="/issues/new">New Issue</Link>
        </Button>
    );
};

export default IssuesPage;
