"use client";

import { TextField, Button } from "@radix-ui/themes";
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
    return (
        <div className="max-w-xl space-y-3">
            <TextField.Root>
                <TextField.Input placeholder="Title" />
            </TextField.Root>
            <SimpleMdeReact placeholder="Description" />
            <Button>Submit new issue</Button>
        </div>
    );
};

export default NewIssuePage;
