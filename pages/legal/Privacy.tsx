import React from "react";
<Card className="mt-6 rounded-2xl">
<CardHeader>
<CardTitle className="text-lg">6. Your Choices</CardTitle>
</CardHeader>
<CardContent className="prose prose-sm dark:prose-invert">
<ul>
<li>Access/update your account information in the dashboard.</li>
<li>Opt out of marketing emails via the unsubscribe link.</li>
<li>Control cookies via your browser settings.</li>
</ul>
</CardContent>
</Card>


<Card className="mt-6 rounded-2xl">
<CardHeader>
<CardTitle className="text-lg">7. Security</CardTitle>
</CardHeader>
<CardContent className="prose prose-sm dark:prose-invert">
<p>We use reasonable technical and organizational measures to protect information. No method of transmission or storage is 100% secure.</p>
</CardContent>
</Card>


<Card className="mt-6 rounded-2xl">
<CardHeader>
<CardTitle className="text-lg">8. International Users</CardTitle>
</CardHeader>
<CardContent className="prose prose-sm dark:prose-invert">
<p>If you access the Services from outside the U.S., you consent to processing and storage in the U.S. and other countries where we or our providers operate.</p>
</CardContent>
</Card>


<Card className="mt-6 rounded-2xl">
<CardHeader>
<CardTitle className="text-lg">9. Children</CardTitle>
</CardHeader>
<CardContent className="prose prose-sm dark:prose-invert">
<p>Our Services are not directed to children under 13 and we do not knowingly collect personal information from them.</p>
</CardContent>
</Card>


<Card className="mt-6 rounded-2xl">
<CardHeader>
<CardTitle className="text-lg">10. Changes</CardTitle>
</CardHeader>
<CardContent className="prose prose-sm dark:prose-invert">
<p>We may update this policy from time to time. Material changes will be posted here with a new “Last updated” date.</p>
</CardContent>
</Card>


<div className="mt-10 text-center text-sm text-muted-foreground">
Questions or requests? <Link to="/contact" className="underline">Contact us</Link>.
</div>
</div>
);
}
