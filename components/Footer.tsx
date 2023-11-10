import { FC } from "react";
import { Stack, Text, Link } from "@chakra-ui/react";

type Props = {
    [key: string]: any
};

const vercelSponsor = process.env["NEXT_PUBLIC_VERCEL_SPONSOR"] === "true";

const Footer: FC<Props> = (props) => (
    <Stack
        as="footer"
        w="full"
        p={3}
        fontSize={["sm", null, "md"]}
        direction={["column", null, "row"]}
        justify="center"
        align="center"
        spacing={[1, null, 2]}
        {...props}
    >
        <Link href="https://github.com/thedaviddelta/lingva-translate/blob/main/LICENSE" isExternal={true}>
            <Text as="span">&#169; 2023 thedaviddelta & contributors</Text>
        </Link>
        <Text as="span" display={["none", null, "unset"]}>·</Text>
        <Link href="https://www.gnu.org/licenses/agpl-3.0.html" isExternal={true}>
            <Text as="span">Licensed under AGPLv3</Text>
        </Link>
                <Text as="span" display={["none", null, "unset"]}>·</Text>
                <Link href="https://www.rsmt.si?utm_source=lingva-translate" isExternal={true}>
                    <Text as="span">▲ Powered by RSMT</Text>
                </Link>
    </Stack>
);

export default Footer;
