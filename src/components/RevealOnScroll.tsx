"use client";

import { motion } from "framer-motion";

type RevealOnScrollProps = {
    children: React.ReactNode;
    delay?: number;
};

export default function RevealOnScroll({ children, delay = 0 }: RevealOnScrollProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
                duration: 0.8,
                delay,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.div>
    );
}