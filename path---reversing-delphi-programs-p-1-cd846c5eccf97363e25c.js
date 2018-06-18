webpackJsonp([0xedc1df29eb85],{855:function(e,t){e.exports={data:{post:{id:"/data/projects/work/self/website/content/posts/2018-06-18--reversing-delphi-programs-p1/index.md absPath of file >>> MarkdownRemark",html:'<p>This is the first article of the ”<strong>Reversing Delphi Programs</strong>” series.</p>\n<p>In this article we will explore the <em>conventions</em> normally used by Delphi compiler to generate machine code from Delphi source code.\nThese are the rules you may expect to see when reversing Delphi programs.</p>\n<p>The default calling convention is <code class="language-text">register</code>.\nIt’s the most efficient calling convention, since it usually <em>avoids creation of a stack frame</em>.</p>\n<p>For the <code class="language-text">register</code> convention the cleanup is performed by the callee.</p>\n<p>Remember that system functions do not necessarily play by the same rules as ordinary functions, especially those functions that are intended to be called implicitly by compiler-generated code instead of being invoked explicitly by user code. The compiler may have extended information on these system functions, like clobbered registers, unusual parameter locations, <code class="language-text">nothrow</code>, <code class="language-text">noreturn</code> and so on.\nThis extended information could be in System unit meta data or hardcoded directly into the compiler.</p>\n<h2>Parameters conventions</h2>\n<p>Up to three parameters are passed in CPU registers, and the rest (if any) are passed on the stack.</p>\n<p>The parameters are passed in order of declaration (left to right).</p>\n<p>The first three parameters that qualify are passed in the <code class="language-text">EAX</code>, <code class="language-text">EDX</code>, and <code class="language-text">ECX</code> registers, in that order.\nThe remaining parameters are pushed onto the stack in order of declaration.</p>\n<p>Real, method-pointer, variant, Int64, and structured types do not qualify as register parameters, but all other parameters do.</p>\n<h3>Example</h3>\n<p>For example, given the declaration:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">procedure Test(A: Integer;\n               var B: Char;\n               C: Double;\n               const D: string;\n               E: Pointer);</code></pre>\n      </div>\n<p>A call to <code class="language-text">Test</code> passes:</p>\n<ul>\n<li><code class="language-text">A</code> in <code class="language-text">EAX</code> as a 32-bit integer</li>\n<li><code class="language-text">B</code> in <code class="language-text">EDX</code> as a pointer to a <code class="language-text">Char</code></li>\n<li><code class="language-text">D</code> in <code class="language-text">ECX</code> as a pointer to a long-string memory block</li>\n<li><code class="language-text">C</code> and <code class="language-text">E</code> are pushed onto the stack as two double-words and a 32-bit pointer, in that order</li>\n</ul>\n<h2>Registers saving conventions</h2>\n<p>Procedures and functions <em>must preserve</em> the <code class="language-text">EBX</code>, <code class="language-text">ESI</code>, <code class="language-text">EDI</code>, and <code class="language-text">EBP</code> registers, but <em>can modify</em> the <code class="language-text">EAX</code>, <code class="language-text">EDX</code>, and <code class="language-text">ECX</code> registers.</p>\n<p>Constructor or destructors preserve the <code class="language-text">DL</code> register.</p>\n<p>When working with the MMX and XMM instructions, functions must preserve the values of the <code class="language-text">xmm</code> and <code class="language-text">mm</code> registers.\nDelphi functions do not make any assumptions about the state and content of <code class="language-text">xmm</code> registers.\nThey do not guarantee that the content of <code class="language-text">xmm</code> registers is unchanged.</p>\n<h2>Function results conventions</h2>\n<p>The following conventions are used for returning function result values.</p>\n<ul>\n<li>\n<p><a href="http://docwiki.embarcadero.com/RADStudio/Tokyo/en/Simple_Types_(Delphi)#Ordinal_Types">Ordinal</a> results are returned, when possible, in a CPU register:</p>\n<ul>\n<li>Bytes are returned in <code class="language-text">AL</code></li>\n<li>Words are returned in <code class="language-text">AX</code></li>\n<li>Double-words are returned in <code class="language-text">EAX</code></li>\n</ul>\n</li>\n<li>\n<p>Real results are returned in the floating-point coprocessor’s top-of-stack register <code class="language-text">ST(0)</code></p>\n<ul>\n<li>For function results of type <a href="http://docwiki.embarcadero.com/Libraries/Tokyo/en/System.Currency">Currency</a>, the value in <code class="language-text">ST(0)</code> is scaled by <code class="language-text">10000</code></li>\n<li>For example, the Currency value <code class="language-text">1.234</code> is returned in <code class="language-text">ST(0)</code> as <code class="language-text">12340</code></li>\n</ul>\n</li>\n<li>For a string, dynamic array, method pointer, or variant result, the effects are the same as if the function result were declared as an additional var parameter following the declared parameters. In other words, <em>the caller passes an additional 32-bit pointer that points to a variable in which to return the function result</em></li>\n<li><a href="http://docwiki.embarcadero.com/Libraries/Tokyo/en/System.Int64">Int64</a> is returned in <code class="language-text">EDX:EAX</code></li>\n<li><a href="http://docwiki.embarcadero.com/Libraries/Tokyo/en/System.Pointer">Pointer</a>, class, class-reference, and procedure-pointer results are returned in <code class="language-text">EAX</code></li>\n<li>\n<p>For static-array, record, and set results:</p>\n<ul>\n<li>If the value occupies one byte it is returned in <code class="language-text">AL</code></li>\n<li>If the value occupies two bytes it is returned in <code class="language-text">AX</code></li>\n<li>If the value occupies four bytes it is returned in <code class="language-text">EAX</code></li>\n<li>Otherwise, the result is returned in an additional var parameter that is passed to the function after the declared parameters</li>\n</ul>\n</li>\n</ul>\n<h2>Methods conventions</h2>\n<p>Methods are like functions but associated with the underlying object (Delphi is Object-Oriented).</p>\n<p>Methods use the <em>same calling conventions</em> as ordinary procedures and functions, except that every method has an <em>additional implicit parameter</em> <code class="language-text">Self</code>, which is a reference to the instance or class in which the method is called.</p>\n<p>Under the <code class="language-text">register</code> convention, <code class="language-text">Self</code> behaves as if it were declared before all other parameters. It is therefore always passed in the <code class="language-text">EAX</code> register.</p>\n<p>The <code class="language-text">Self</code> parameter is passed as a 32-bit pointer.</p>\n<h2>Constructors and Destructors conventions</h2>\n<p>Constructors and destructors use the same calling conventions as other methods, except that an additional Boolean <code class="language-text">flag</code> parameter is passed to <em>indicate the context of the constructor or destructor call</em>.</p>\n<p>The flag parameter behaves as if it were declared before all other parameters. It is passed in the <code class="language-text">DL</code> register.</p>\n<ul>\n<li>\n<p>In constructors:</p>\n<ul>\n<li><code class="language-text">True</code>: indicates that the constructor was <em>invoked through a class reference</em>. In this case, the constructor creates an instance of the class given by <code class="language-text">Self</code>, and returns a reference to the newly created object in <code class="language-text">EAX</code></li>\n<li><code class="language-text">False</code>: indicates that the constructor was <em>invoked through an instance object or using the inherited keyword</em>. In this case, the constructor behaves like an ordinary method</li>\n</ul>\n</li>\n<li>\n<p>In destructors:</p>\n<ul>\n<li><code class="language-text">True</code>: indicates that the destructor was <em>invoked through an instance object</em>. In this case, the destructor deallocates the instance given by <code class="language-text">Self</code> just before returning</li>\n<li><code class="language-text">False</code>: indicates that the destructor was <em>invoked using the inherited keyword</em>. In this case, the destructor behaves like an ordinary method</li>\n</ul>\n</li>\n</ul>\n<h2>Sources</h2>\n<ul>\n<li><a href="https://www.hackthebox.eu">Hack the Box</a></li>\n<li><a href="http://docwiki.embarcadero.com/RADStudio/Tokyo/en/Delphi_Data_Types_for_API_Integration">Data Types</a></li>\n<li><a href="http://docwiki.embarcadero.com/RADStudio/Tokyo/en/Procedures_and_Functions_(Delphi)">Procedures and Functions</a></li>\n<li><a href="http://docwiki.embarcadero.com/RADStudio/Tokyo/en/Program_Control_(Delphi)">Program Control</a></li>\n</ul>\n<!-- Pointers -->',fields:{slug:"/reversing-delphi-programs-p1/",prefix:"2018-06-18"},frontmatter:{title:"Reversing Delphi Programs - Part 1",subTitle:"Getting started with Reverse Engineering of Delphi programs",category:"Reverse Engineering",status:"Done",revision:1,confidence:"High Likely",importance:6,cover:{childImageSharp:{resize:{src:"/static/reversing-delphi-programs-p1-cover-bb76240bb7719eadd2daae35d935ecb0-ada8c.jpg"}}}}},author:{id:"/data/projects/work/self/website/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Alessandro Molari</strong>   Cyber-Security Consultant &#x26; Ethical Hacker, specialized in Red Teaming, Penetration Testing, Advanced Persistent Threat (APT), Vulnerability Research &#x26; Malware Analysis</p>"},footnote:{id:"/data/projects/work/self/website/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>website prodly built by <a href="https://alessandro.molari.me">Alessandro Molari</a></li>\n<li>using the awesome triad\n<a href="https://gentoo.org"><img src="/icons/gentoo.svg" alt="Gentoo"></a> &#x26;\n<a href="https://xmonad.org"><img src="/icons/xmonad.svg" alt="XMonad"></a> &#x26;\n<a href="https://www.vim.org"><img src="/icons/vim.svg" alt="Vim"></a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:""}}}},pathContext:{slug:"/reversing-delphi-programs-p1/"}}}});
//# sourceMappingURL=path---reversing-delphi-programs-p-1-cd846c5eccf97363e25c.js.map