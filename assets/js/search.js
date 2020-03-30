
var documents = [{
    "id": 0,
    "url": "https://jianshen92.github.io/404.html",
    "title": "",
    "body": " 404 Page not found :(  The requested page could not be found. "
    }, {
    "id": 1,
    "url": "https://jianshen92.github.io/about/",
    "title": "About Me",
    "body": "This is where you put the contents of your About page. Like all your pages, it’s in Markdown format. This website is powered by fastpages 1.       a blogging platform that natively supports Jupyter notebooks in addition to other formats.  &#8617;    "
    }, {
    "id": 2,
    "url": "https://jianshen92.github.io/categories/",
    "title": "Tags",
    "body": "Contents: {% if site. categories. size &gt; 0 %} {% for category in site. categories %} {% capture category_name %}{{ category | first }}{% endcapture %} {{ category_name }}{% endfor %}{% endif %} {% for category in site. categories %}  {% capture category_name %}{{ category | first }}{% endcapture %} &lt;h3 id = {{ category_name }} &gt;&lt;i class= fas fa-tags category-tags-icon &gt;&lt;/i&gt;&lt;/i&gt; {{ category_name }}&lt;/h3&gt;&lt;a name= {{ category_name | slugize }} &gt;&lt;/a&gt;{% for post in site. categories[category_name] %}{%- assign date_format = site. minima. date_format | default:  %b %-d, %Y  -%}&lt;article class= archive-item &gt; &lt;p class= post-meta post-meta-title &gt;&lt;a class= page-meta  href= {{ site. baseurl }}{{ post. url }} &gt;{{post. title}}&lt;/a&gt; • {{ post. date | date: date_format }}&lt;/p&gt;&lt;/article&gt;{% endfor %} {% endfor %}"
    }, {
    "id": 3,
    "url": "https://jianshen92.github.io/images/copied_from_nb/",
    "title": "",
    "body": "WarningDo not manually save images into this folder. This is used by GitHub Actions to automatically copy images.  Any images you save into this folder could be deleted at build time. "
    }, {
    "id": 4,
    "url": "https://jianshen92.github.io/2020/03/30/Odds-Or-Evens.html",
    "title": "Odd or Even?",
    "body": "2020/03/30 -  You play a game of guessing the outcome of flipping two coins/frisbee. What should you guess?  toc: true badges: true comments: true categories: [jupyter, game]Play the Game: You are playing in the finals of an ultimate game, and the wind is blowing hard. 10 Minutes before the game starts, captain of both finalist teams are inching towards each other, each holding a disc, and you are one of them. The team who wins the flip would get to start on the downwind side. Sam, the captain of the opposing team gives you the opportunity to call for the outcome of the flip. What would you call, EVENS or ODDS? HOW?: The Probabilities: Let $p(Heads) = x$ be the probability of the getting a head in single disc flip. Then, $p(Tails) = 1-x$ We find the probabilities of getting even and odds. $\begin{align}p(Evens) &amp; = p(Heads)p(Heads) + p(Tails)p(Tails) &amp; = x^2 + (1-x)^2 &amp; = 2x^2 - 2x + 1\end{align}$ $\begin{align}p(Odds) &amp; = p(Heads)p(Tails) + p(Tails)p(Heads) &amp; = 2 \times x(1-x) &amp; = 2x - 2x^2\end{align}$ We find the difference in probability, i. e. $\begin{align}p(Evens)-p(Odds) = 4x^2 - 4x + 1 = y\end{align}$ Visualizing it: Let’s plot the graph of $ y = 4x^2 - 4x + 1 $ What do we see: Given all probability $x$ from 0 to 1, $p(Evens)-p(Odds)$ is always greater than 0. In fact this is true for all $x \in \mathbb{R}$. \begin{align}p(Evens) \geqslant p(Odds)\end{align} So?: The answer is apparent. If the chances of getting heads or tails is 0. 5, calling even or odds does not matter. However, our environment is imperfect, e. g. asymmetry of frisbee disc, wind condition. It is safe to assume $x$, will deviate from 0. 5. Therefore, you’ll be correct by calling EVENS at least half the time, if not more. "
    }, {
    "id": 5,
    "url": "https://jianshen92.github.io/fastpages/jupyter/2020/03/28/Git-Gud-for-Can't-Stop-Game.html",
    "title": "Git Gud Can't Stop",
    "body": "2020/03/28 -                 import pandas as pdimport numpy as npimport itertools          all_lst = []          # Compute all possible dice combinationfor d1 in range(1,7):  for d2 in range(1,7):    for d3 in range(1,7):      for d4 in range(1,7):        comb = [d1,d2,d3,d4]        all_lst. append(comb)           df = pd. DataFrame(all_lst)          df. columns = [&quot;dice_1&quot;, &quot;dice_2&quot;, &quot;dice_3&quot;, &quot;dice_4&quot;]          df[&quot;comb_set&quot;] = np. NaN          df           dice_1   dice_2   dice_3   dice_4   comb_set         0   1   1   1   1   NaN       1   1   1   1   2   NaN       2   1   1   1   3   NaN       3   1   1   1   4   NaN       4   1   1   1   5   NaN       . . .    . . .    . . .    . . .    . . .    . . .        1291   6   6   6   2   NaN       1292   6   6   6   3   NaN       1293   6   6   6   4   NaN       1294   6   6   6   5   NaN       1295   6   6   6   6   NaN   1296 rows × 5 columns         # Compute the possible number can be formed for each combination with two dicesunique_lst = []for i, row in df. iterrows():  comb_set = set()  comb_set. add(row[&quot;dice_1&quot;] + row[&quot;dice_2&quot;])   comb_set. add(row[&quot;dice_1&quot;] + row[&quot;dice_3&quot;])   comb_set. add(row[&quot;dice_1&quot;] + row[&quot;dice_4&quot;])   comb_set. add(row[&quot;dice_2&quot;] + row[&quot;dice_3&quot;])   comb_set. add(row[&quot;dice_2&quot;] + row[&quot;dice_4&quot;])   comb_set. add(row[&quot;dice_3&quot;] + row[&quot;dice_4&quot;])   unique_lst. append(list(comb_set))#   print(list(comb_set))  #   df. loc[i,&quot;comb_set&quot;] = list(comb_set)          df[&quot;comb_set&quot;] = unique_lst          df           dice_1   dice_2   dice_3   dice_4   comb_set         0   1   1   1   1   [2. 0]       1   1   1   1   2   [2. 0, 3. 0]       2   1   1   1   3   [2. 0, 4. 0]       3   1   1   1   4   [2. 0, 5. 0]       4   1   1   1   5   [2. 0, 6. 0]       . . .    . . .    . . .    . . .    . . .    . . .        1291   6   6   6   2   [8. 0, 12. 0]       1292   6   6   6   3   [9. 0, 12. 0]       1293   6   6   6   4   [10. 0, 12. 0]       1294   6   6   6   5   [11. 0, 12. 0]       1295   6   6   6   6   [12. 0]   1296 rows × 5 columns         len(unique_lst)  1296        # Possible Column Numbers in gamenumber_col = list(range(2,13)); number_col  [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]        prob_lst = []for col in number_col:  count = 0  for unique in unique_lst:    if col in unique:      count += 1  prob = count/len(unique_lst)  prob_lst. append(prob)            for col, prob in zip(number_col,prob_lst):  print(f&quot;Probability of Hitting {col} is {round(prob*100,2)}%&quot;)  Probability of Hitting 2 is 13. 19%Probability of Hitting 3 is 23. 3%Probability of Hitting 4 is 35. 57%Probability of Hitting 5 is 44. 75%Probability of Hitting 6 is 56. 1%Probability of Hitting 7 is 64. 35%Probability of Hitting 8 is 56. 1%Probability of Hitting 9 is 44. 75%Probability of Hitting 10 is 35. 57%Probability of Hitting 11 is 23. 3%Probability of Hitting 12 is 13. 19%        comb_3_lst = list(itertools. combinations(number_col, 3))          prob_3_lst = []for comb_3 in comb_3_lst:  count = 0  for unique in unique_lst:    if comb_3[0] in unique or comb_3[1] in unique or comb_3[2] in unique:      count += 1        prob_3 = count/len(unique_lst)  prob_3_lst. append(prob_3)          assert len(prob_3_lst) == len(comb_3_lst)          final_df = pd. DataFrame()          final_df[&quot;possible_numbers_round&quot;] = comb_3_lst          final_df[&quot;probability_hit&quot;] = prob_3_lst          final_df. sort_values(by=&#39;probability_hit&#39;, ascending=False). head(10)           possible_numbers_round   probability_hit         130   (6, 7, 8)   0. 919753       131   (6, 7, 9)   0. 914352       115   (5, 7, 8)   0. 914352       136   (6, 8, 10)   0. 911265       89   (4, 6, 8)   0. 911265       132   (6, 7, 10)   0. 902778       94   (4, 7, 8)   0. 902778       110   (5, 6, 8)   0. 895062       135   (6, 8, 9)   0. 895062       66   (3, 7, 8)   0. 892747           final_df. sort_values(by=&#39;probability_hit&#39;, ascending=False). tail(10)           possible_numbers_round   probability_hit         42   (2, 10, 11)   0. 578704       52   (3, 4, 12)   0. 578704       16   (2, 4, 12)   0. 551698       43   (2, 10, 12)   0. 551698       7   (2, 3, 11)   0. 525463       80   (3, 11, 12)   0. 525463       0   (2, 3, 4)   0. 521605       164   (10, 11, 12)   0. 521605       44   (2, 11, 12)   0. 438272       8   (2, 3, 12)   0. 438272     "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')
    this.metadataWhitelist = ['position']

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}