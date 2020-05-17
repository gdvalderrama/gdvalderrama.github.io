---
layout: default
---
I’ll post random things here.

[Read more]({{ site.baseurl }}{% link about.md %}).

# Posts

{% for post in site.posts %}
{{ post.date | date: "%b %-d, %Y" }}
## [{{ post.title }}]({{ post.url | prepend: site.baseurl }})
{% endfor %}
